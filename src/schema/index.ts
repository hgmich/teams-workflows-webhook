import * as ac14 from './adaptive-card-v1.4'

export interface WebhookPayload {
  type: 'message'
  attachments: AdaptiveCardItem[]
}

export interface AdaptiveCardItem {
  contentType: 'application/vnd.microsoft.card.adaptive'
  contentUrl: null
  content: ac14.AdaptiveCardContent
}

export const MESSAGE_BASE: WebhookPayload = {
  type: 'message',
  attachments: [
    {
      contentType: 'application/vnd.microsoft.card.adaptive',
      contentUrl: null,
      content: {
        $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
        version: '1.4',
        type: 'AdaptiveCard',
        body: []
      }
    }
  ]
}
