export default (state: any, action: any) => {
  switch (action.type) {
    case "SHOW_TOAST":
      return {
        show: true,
      };
    case "HIDE_TOAST":
      return {
        show: false,
      };
    default:
      return state;
  }
};
