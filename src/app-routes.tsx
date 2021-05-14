import ReduxA1A1 from './variants/redux/a1-basic-bad/a1-one-store/index'
import ReduxA1A2 from './variants/redux/a1-basic-bad/a2-multi-store/index'
import ReduxA1A3 from './variants/redux/a1-basic-bad/a3-multi-store-refactored/index'
import ReduxA1A4 from './variants/redux/a1-basic-bad/a4-add-thunk/index'
import ReduxA2A1 from './variants/redux/a2-toolkit/a1-one-store/index'
import ReduxA2A2 from './variants/redux/a2-toolkit/a2-multi-store/index'
import ReduxA3A1 from './variants/redux/a3-saga/a1-simple/index'

interface route {
  basepath: string
  Component: () => JSX.Element
}

export const routes: route[] = [
  { basepath: '/redux/a1/a1', Component: ReduxA1A1 },
  { basepath: '/redux/a1/a2', Component: ReduxA1A2 },
  { basepath: '/redux/a1/a3', Component: ReduxA1A3 },
  { basepath: '/redux/a1/a4', Component: ReduxA1A4 },
  { basepath: '/redux/a2/a1', Component: ReduxA2A1 },
  { basepath: '/redux/a2/a2', Component: ReduxA2A2 },
  { basepath: '/redux/a3/a1', Component: ReduxA3A1 },
]
