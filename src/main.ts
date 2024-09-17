import * as core from '@actions/core'
import { parse as parseYaml } from 'yaml'
import { MESSAGE_BASE } from './schema'
import fetch from 'node-fetch-commonjs'

const jsonHeaders = {
  'Content-Type': 'application/json'
}

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const webhookUrl = core.getInput('webhook-url', { required: true })
    const cards: unknown = parseYaml(
      core.getInput('body', { trimWhitespace: false, required: true })
    )

    if (!(cards instanceof Array)) {
      throw new Error('Body must be a YAML array')
    }

    const payload = { ...MESSAGE_BASE }
    payload.attachments[0].content.body = cards

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    core.debug(`Sending payload: ${JSON.stringify(payload, null, 2)}`)

    // Log the current timestamp, wait, then log the new timestamp
    core.debug(new Date().toTimeString())
    const resp = await fetch(webhookUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: jsonHeaders
    })
    core.debug(new Date().toTimeString())

    core.debug(`Response status: ${resp.status}`)
    const body = await resp.text()
    core.debug(`Response body: ${body}`)

    if (!resp.ok) {
      core.setFailed(
        `Failed to send message to webhook URL: got status ${resp.status}`
      )
      return
    }

    // Set outputs for other workflow steps to use
    core.setOutput('status', resp.status)
    core.setOutput('body', body)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
