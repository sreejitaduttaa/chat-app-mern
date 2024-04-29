
export const signup = async (req,res) => {

    try {
        const {fullName,username,password,confirmPassword,gender} = req.body;
    } catch (error) {
        
    }

    // res.send("signup");
    // console.log("signup");
}

export const login = (req,res) => {
    res.send("login");

    console.log("login");
}

export const logout = (req,res) => {
    res.send("logout");
    console.log("logout");
}
