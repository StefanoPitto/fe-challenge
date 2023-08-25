import classNames from "classnames"
import { useRef, useState } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)
  const [value, setValue] = useState<boolean>(checked)

  const handleCheckboxChange = () => {
    const newValue = !value
    setValue(newValue)
    onChange(newValue)
  }

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId} onClick={handleCheckboxChange}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": value,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={value}
        disabled={disabled}
      />
    </div>
  )
}
