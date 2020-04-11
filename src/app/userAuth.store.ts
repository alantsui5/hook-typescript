import { useState } from "react";

export default () => {
    const [isLoggedin, setIsLoggedin] = useState<Boolean>(false);
    return { isLoggedin, setIsLoggedin };
}