import {UI_SIZE_XL, UI_SIZE_L, UI_SIZE_M, UI_SIZE_S, UI_SIZE_XS} from "@/constants/index";

export const actionUiModeSet = (width) => {
  const widthToMode = width => {
    if (width >= 1199) {
      return UI_SIZE_XL
    }
    if (width >= 992) {
      return UI_SIZE_L
    }
    if (width >= 768) {
      return UI_SIZE_M
    }
    if (width >= 576) {
      return UI_SIZE_S
    }

    return UI_SIZE_XS
  }

  return widthToMode(width)
}

export const getWindowWidthMode = () => {
  const { documentElement } = document
  const width = window.innerWidth || documentElement.clientWidth
  return actionUiModeSet(width)
}

export const windowHeightSetToDocument = () => {
  const { documentElement } = document
  const height = window.innerHeight || documentElement.clientHeight

  const vh = height * 0.01
  documentElement.style.setProperty('--vh', `${vh}px`)
}
