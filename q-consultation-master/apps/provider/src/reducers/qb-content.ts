import * as Types from '../actions'

export interface ContentReducer {
  type?: 'chat' | 'record'
  error?: string
  loading: boolean
  progress: number
}

const initialState: ContentReducer = {
  type: undefined,
  error: undefined,
  loading: false,
  progress: 0,
}

export default (
  state = initialState,
  action:
    | Types.QBContentAction
    | Types.LogoutSuccessAction
    | Types.QBInitFailureAction,
) => {
  switch (action.type) {
    case Types.QB_FILE_UPLOAD_REQUEST:
      return {
        ...state,
        error: undefined,
        loading: true,
        type: action.payload.type,
      }
    case Types.QB_FILE_UPLOAD_PROGRESS:
      return { ...state, progress: action.payload }
    case Types.QB_FILE_UPLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        progress: initialState.progress,
        type: initialState.type,
      }
    case Types.QB_FILE_UPLOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        type: initialState.type,
      }
    case Types.QB_FILE_UPLOAD_CANCEL:
    case Types.LOGOUT_SUCCESS:
    case Types.QB_INIT_FAILURE:
      return initialState
    default:
      return state
  }
}
