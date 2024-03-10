// import library
import { Routes , Route} from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence , motion} from "framer-motion"

const AnimationWrapper = ( {children , keyValue , inital={opacity:0} , animate={opacity:1} , transition={duration:1.2}  , className   }) =>{


    const [serachBoxVisibility , setSerachBoxVisibility] = useState(false)

    return(



        <AnimatePresence>
            {/* AnimatePresence wil keep track of motion div */}
            {/* without key motion will work on only refrersh or component change
            key will help to diffrentiate section/divison based on type/condition */}
            <motion.div
                key= {keyValue}
                initial={inital}
                animate={animate}
                transition={transition}
                className={className}
            >
                {children}

            </motion.div>
        </AnimatePresence>
    )
}

export {AnimationWrapper};