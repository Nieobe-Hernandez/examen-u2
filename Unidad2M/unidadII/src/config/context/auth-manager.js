export const authManager = ( state = {}, action
    )=>{
        switch (action.type) {
            case "SIGNIN":
                    return{
                        ...action.paylod, //... operador expres 
                        signed: true,
                    };
                case "SIGNOUT":
                    return{
                        signed:false,
                    };
            default:
                return state;
        }
    }