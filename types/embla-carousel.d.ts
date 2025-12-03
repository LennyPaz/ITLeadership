declare module 'embla-carousel-react' {
  import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'

  type UseEmblaCarouselType = [
    (node: HTMLElement | null) => void,
    EmblaCarouselType | undefined
  ]

  interface EmblaPluginType {
    name: string
    options?: Record<string, unknown>
    init: (embla: EmblaCarouselType, optionIndex: number) => void
    destroy: () => void
  }

  export default function useEmblaCarousel(
    options?: EmblaOptionsType,
    plugins?: EmblaPluginType[]
  ): UseEmblaCarouselType
}

declare module 'embla-carousel-autoplay' {
  interface AutoplayOptionsType {
    delay?: number
    stopOnInteraction?: boolean
    stopOnMouseEnter?: boolean
    playOnInit?: boolean
  }

  export default function Autoplay(options?: AutoplayOptionsType): {
    name: string
    options?: Record<string, unknown>
    init: (embla: unknown, optionIndex: number) => void
    destroy: () => void
  }
}
