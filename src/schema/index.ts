import * as ac15 from './adaptive-card-v1.5'

export interface WebhookPayload {
  type: 'message'
  attachments: AdaptiveCardItem[]
}

export interface AdaptiveCardItem {
  contentType: 'application/vnd.microsoft.card.adaptive'
  contentUrl: null
  content: ac15.AdaptiveCardContent
}

export const MESSAGE_BASE: WebhookPayload = {
  type: 'message',
  attachments: [
    {
      contentType: 'application/vnd.microsoft.card.adaptive',
      contentUrl: null,
      content: {
        $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
        type: 'AdaptiveCard',
        body: []
      }
    }
  ]
}
