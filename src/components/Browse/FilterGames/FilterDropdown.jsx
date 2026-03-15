import { useState, Children, cloneElement } from "react";
import { ChevronDown, Check } from "lucide-react";

function FilterDropdown({ title, children }) {

  const [open, setOpen] = useState(false);

  const renderChildren = () => {

    return Children.map(children, (child, index) => {

      if (!child) return null;

      if (child.type === "label") {

        const childArray = Children.toArray(child.props.children);

        const input = childArray.find(
          (c) => c?.type === "input"
        );

        const text = childArray.find(
          (c) => typeof c === "string"
        );

        if (input?.props?.type === "checkbox") {

          const clonedInput = cloneElement(input, {
            className: "checkbox-input"
          });

          return (

            <label className="custom-checkbox" key={index}>

              {clonedInput}

              <span className="checkbox-box">
                <Check className="checkbox-icon" />
              </span>

              {text}

            </label>

          );
        }
      }

      return child;

    });

  };

  return (

    <div className={`filter-item ${open ? "open" : ""}`}>

      <button
        className="filter-dropdown"
        onClick={() => setOpen(!open)}
      >

        {title}

        <ChevronDown
          className={`chevron ${open ? "rotate" : ""}`}
        />

      </button>

      {open && (

        <div className="filter-content">

          {renderChildren()}

        </div>

      )}

    </div>

  );
}

export default FilterDropdown;