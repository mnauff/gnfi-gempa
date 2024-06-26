export const ItemTypes = {
  BLOCK: 'block',
  SECTION: 'section',
  SORTABLE: 'sortable',
}
export const ContentType = {
  IMAGE: 'image',
  TEXT: 'text',
  CUSTOM: 'custom',
}
export type DraggableItem = {
  name: string
  component: string
  order: number
  group: string
  groupClassName?: string
  index: number
}
