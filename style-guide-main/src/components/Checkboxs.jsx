import { Check, Minus } from "lucide-react"
import { useState } from "react"

const Checkboxs = ({active, type, color}) => {
    const [selected, setSelected] = useState(active)
  return (
    <div className={`flex items-center justify-center w-7 h-7 border-2 rounded-lg ${selected ? color : ""}`} onClick={() => setSelected(!active)}>
      {
        selected && type === "check" && <Check className="text-white w-4 h-4" strokeWidth={4}/>
      }

      {
        selected && type === "minus" && <Minus className="text-white w-4 h-4" strokeWidth={4}/>
      }

    </div>
  )
}

export default Checkboxs