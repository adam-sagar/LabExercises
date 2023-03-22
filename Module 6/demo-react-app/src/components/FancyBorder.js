function FancyBorder(props)


<FancyBorder color="black">
    <h1 className="Dialog-title">{props.title}</h1>
    <p className="Dialog-message">{props.message}</p>
    {props.children} {/* everything in between the opening <Dialog> and closing </Dialog> tags on lines 34-36 */}
</FancyBorder>