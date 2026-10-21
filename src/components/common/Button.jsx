const Button = ({Tagname="button", children, xyz, varient="solid", ...props}) => {
  if (varient==="solid") {
    return (
    <Tagname {...props} className="bg-[#6366F1] text-white h-13 py-3.25 px-4 w-28.75 rounded-sm transition" >
      {children}
    </Tagname>
  )
    
  }
  
  if (varient==="outline") {
    return (
    <Tagname {...props} className="bg-white text-black h-13 py-3.25 px-8 rounded-sm"  >
      {children}
    </Tagname>
  )
    
  }
}

export default Button