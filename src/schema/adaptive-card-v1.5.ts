export type FallbackOption = 'drop'
export type BlockElementHeight = 'auto' | 'stretch'
export type Spacing =
  | 'default'
  | 'none'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge'
  | 'padding'

export interface IMinElement {
  id?: string
  isVisible?: boolean
  requires?: { [key: string]: string }
}

export interface IElement extends IMinElement {
  fallback?: IElement | FallbackOption
  height?: BlockElementHeight
  separator?: boolean
  spacing?: Spacing
}

export type ActionStyle = 'default' | 'positive' | 'destructive'

export interface IAction extends IElement {
  title?: string
  iconUrl?: string
  id?: string
  style?: ActionStyle
}

export interface OpenUrlAction extends IAction {
  type: 'Action.OpenUrl'
  url: string
}

export type AssociatedInputs = 'auto' | 'none'

export interface SubmitAction extends IAction {
  type: 'Action.Submit'
  data?: { [key: string]: object | string | number | boolean }
  associatedInputs?: AssociatedInputs
}

export interface ShowCardAction extends IAction {
  type: 'Action.ShowCard'
  card?: AdaptiveCardContent
}

export interface TargetElement {
  elementId: string
  isVisible?: boolean
}

export interface ToggleVisibilityAction extends IAction {
  type: 'Action.ToggleVisibility'
  targetElements: TargetElement[]
}

export interface ExecuteAction extends IAction {
  type: 'Action.Execute'
  verb?: string
  data?: { [key: string]: object | string | number | boolean }
  associatedInputs?: AssociatedInputs
}

export type ISelectAction =
  | OpenUrlAction
  | SubmitAction
  | ToggleVisibilityAction
  | ExecuteAction

export interface ActionSet extends IElement {
  type: 'ActionSet'
  actions: Action[]
}

export interface Column extends IMinElement {
  items?: Element[]
  backgroundImage?: string | BackgroundImage
  bleed?: boolean
  fallback?: Column | FallbackOption
  minHeight?: string
  rtl?: boolean
  separator?: boolean
  spacing?: Spacing
  selectAction?: ISelectAction
  style?: ContainerStyle
  verticalContentAlignment?: VerticalAlignment
  width?: string | number
}

export interface ColumnSet extends IElement {
  type: 'ColumnSet'
  columns?: Column[]
  selectAction?: ISelectAction
  style?: ContainerStyle
  bleed?: boolean
  minHeight?: string
  horizontalAlignment?: HorizontalAlignment
}

export type ImageFillMode =
  | 'cover'
  | 'repeat'
  | 'repeatHorizontally'
  | 'repeatVertically'

export interface BackgroundImage {
  url: string
  fillMode?: ImageFillMode
  horizontalAlignment?: HorizontalAlignment
  verticalAlignment?: VerticalAlignment
}

export interface Container extends IElement {
  type: 'Container'
  items: Element[]
  selectAction?: ISelectAction
  style?: ContainerStyle
  verticalContentAlignment?: VerticalAlignment
  bleed?: boolean
  backgroundImage?: string | BackgroundImage
  minHeight?: string
  rtl?: boolean
}

export interface Fact {
  title: string
  value: string
}

export interface FactSet extends IElement {
  type: 'FactSet'
  facts: Fact[]
}

export type ImageStyle = 'default' | 'person'

export interface Image extends IElement {
  type: 'Image'
  url: string
  altText?: string
  backgroundColor?: string
  horizontalAlignment?: HorizontalAlignment
  selectAction?: ISelectAction
  size?: ImageSize
  style?: ImageStyle
  width?: string
}

export type ImageSize = 'auto' | 'stretch' | 'small' | 'medium' | 'large'
export type ImageSetStyle = 'default' | 'stacked' | 'grid'

export interface ImageSet extends IElement {
  type: 'ImageSet'
  images: Image[]
  imageSize?: ImageSize
  style?: ImageSetStyle
}

export type InputLabelPosition = 'inline' | 'above'
export type InputStyle = 'revealOnHover' | 'default'

export interface IInput extends IElement {
  errorMessage?: string
  isRequired?: boolean
  label?: string
  labelPosition?: InputLabelPosition
  labelWidth?: string | number
  inputStyle?: InputStyle
}

export type ChoiceInputStyle = 'compact' | 'expanded' | 'filtered'

export interface Choice {
  title: string
  value: string
}

export interface ChoiceSetInput extends IInput {
  type: 'Input.ChoiceSet'
  id: string
  choices?: Choice[]
  isMultiSelect?: boolean
  style?: ChoiceInputStyle
  value?: string
  placeholder?: string
  wrap?: boolean
}

export interface DateInput extends IInput {
  type: 'Input.Date'
  id: string
  max?: string
  min?: string
  placeholder?: string
  value?: string
}

export interface NumberInput extends IInput {
  type: 'Input.Number'
  id: string
  max?: number
  min?: number
  placeholder?: string
  value?: number
}

export type TextInputStyle = 'text' | 'tel' | 'url' | 'email' | 'password'

export interface TextInput extends IInput {
  type: 'Input.Text'
  id: string
  isMultiline?: boolean
  maxLength?: number
  placeholder?: string
  regex?: string
  style?: TextInputStyle
  inlineAction?: ISelectAction
  value?: string
}

export interface TimeInput extends IInput {
  type: 'Input.Time'
  id: string
  max?: string
  min?: string
  placeholder?: string
  value?: string
}

export interface ToggleInput extends IInput {
  type: 'Input.Toggle'
  title: string
  id: string
  value?: string
  valueOff?: string
  valueOn?: string
  wrap?: boolean
}

export interface CardMediaSource {
  url: string
  mimeType?: string
}

export interface CaptionSource {
  mimeType: string
  url: string
  label: string
}

export interface Media extends IElement {
  type: 'Media'
  sources: CardMediaSource[]
  poster?: string
  altText?: string
  capionSources?: CaptionSource[]
}

export type Colors =
  | 'default'
  | 'dark'
  | 'light'
  | 'accent'
  | 'good'
  | 'warning'
  | 'attention'
export type FontType = 'monospace' | 'default'
export type FontSize = 'small' | 'default' | 'medium' | 'large' | 'extraLarge'
export type FontWeight = 'lighter' | 'default' | 'bolder'

export interface TextRun {
  type: 'TextRun'
  text: string
  color?: Colors
  fontType?: FontType
  highlight?: boolean
  isSubtle?: boolean
  italic?: boolean
  selectAction?: ISelectAction
  size?: FontSize
  strikethrough?: boolean
  underline?: boolean
  weight?: FontWeight
}

type Inline = string | TextRun

export interface RichTextBlock extends IElement {
  type: 'RichTextBlock'
  inlines: Inline[]
  horizontalAlignment?: HorizontalAlignment
}

export type ContainerStyle =
  | 'default'
  | 'emphasis'
  | 'good'
  | 'attention'
  | 'warning'
  | 'accent'

export type HorizontalAlignment = 'left' | 'center' | 'right'
export type VerticalAlignment = 'top' | 'center' | 'bottom'

export interface TableColumnDefinition {
  width?: number
}

export interface TableRow {
  type: 'TableRow'
  cells?: TableCell[]
}

export interface TableCell {
  type: 'TableCell'
  items: Element[]
  selectAction?: ISelectAction
  style?: ContainerStyle
  verticalContentAlignment?: VerticalAlignment
  bleed?: boolean
  backgroundImage?: string | BackgroundImage
  minHeight?: string
  rtl?: boolean
}

export interface Table extends IElement {
  type: 'Table'
  columns?: TableColumnDefinition[]
  rows?: TableRow[]
  firstRowAsHeader?: boolean
  showGridLines?: boolean
  gridStyle?: ContainerStyle
  horizontalCellContentAlignment?: HorizontalAlignment
  verticalCellContentAlignment?: VerticalAlignment
}

export type TextBlockStyle = 'default' | 'heading'

export interface TextBlock extends IElement {
  type: 'TextBlock'
  text: string
  color?: Colors
  fontType?: FontType
  horizontalAlignment?: HorizontalAlignment
  isSubtle?: boolean
  maxLines?: number
  size?: FontSize
  weight?: FontWeight
  wrap?: boolean
  style?: TextBlockStyle
}

export interface Refresh {
  action?: ExecuteAction
  expires?: string
  userIds?: string[]
}

export interface TokenExchangeResource {
  id: string
  uri: string
  providerId: string
}

export interface AuthCardButton {
  type: string
  value: string
  title?: string
  image?: string
}

export interface Authentication {
  text?: string
  connectionName?: string
  tokenExchangeResource?: TokenExchangeResource
  buttons?: AuthCardButton[]
}

export type Action =
  | OpenUrlAction
  | SubmitAction
  | ShowCardAction
  | ToggleVisibilityAction
  | ExecuteAction

export type Input =
  | ChoiceSetInput
  | DateInput
  | NumberInput
  | TextInput
  | TimeInput
  | ToggleInput

export type Element =
  | Action
  | ActionSet
  | ColumnSet
  | Container
  | FactSet
  | Image
  | ImageSet
  | Input
  | Media
  | RichTextBlock
  | Table
  | TextBlock

export interface AdaptiveCardContent {
  $schema?: 'http://adaptivecards.io/schemas/adaptive-card.json'
  type: 'AdaptiveCard'
  version?: '1.5'
  refresh?: Refresh
  authentication?: Authentication
  body?: Element[]
  actions?: Action[]
  selectAction?: ISelectAction
  fallbackText?: string
  backgroundImage?: string | BackgroundImage
  minHeight?: string
  rtl?: boolean
  speak?: string
  lang?: string
  verticalContentAlignment?: VerticalAlignment
}

export const CARD_BASE: AdaptiveCardContent = {
  $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
  type: 'AdaptiveCard'
}
