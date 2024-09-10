const initialState = {
  loggedUser: '',
  token: '',
};
export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADDEVENT':
      return [...state, action.payload];
      break;

    case 'REMOVEEVENT':
      return state.filter((item) => item.title !== action.payload);
      break;

    case 'EVENTUPDATE':
      return state.map((event) =>
        event.title === action.payload.title ? { ...event, ...action.payload } : event,
      );

      break;

    case 'LOGIN':
      return {
        ...state,
        loggedUser: action.payload,
        token: action.payload.token,
      };
      break;

    case 'LOGOUT':
      return {
        ...state,
        loggedUser: null,
        token: null,
      };
      break;

    default:
      break;
  }

  return state;
};
