import React from "react";

function FancyBorder(props) {

    return (
        <div className={'FancyBorder componentBox FancyBorder-' + props.color}>
            {props.children} {/* everything in between the opening <FancyBorder> and closing </FancyBorder> tags on lines 16-18 */}
        </div>
    );
}

export default FancyBorder;