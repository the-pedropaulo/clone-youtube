import { useState } from "react";

interface HeadingProps {
    children: React.ReactNode;
}

export default function Button({children}: HeadingProps) {
    
    const [show, setShow] = useState<boolean>(false);

    return (
        <>
            <button onClick={() => {
                setShow(!show)
            }}>{children}</button>
            {show && 
            <span>Show</span>
            }
        </>
        
    );
}