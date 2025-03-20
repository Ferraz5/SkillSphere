import { useState } from 'react';

import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerComponent() {
    const [startDate, setStartDate] = useState("");

    const getMinBirthDate = () => {
        const today = new Date();
        today.setFullYear(today.getFullYear() - 16);
        return today.toISOString().split("T")[0]; // Format YYYY-MM-DD
      };

    return  (
        <div>
        <label htmlFor="birthdate">DATA DE NASCIMENTO</label>
        <div style={{ marginTop: "5px" }} />
        <input
          type="date"
          id="birthdate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          max={getMinBirthDate()} //  Restrict to ages 16 and older
          className="text-black rounded-full border border-black/[.08] dark:border-white/[.145] h-8 sm:px-5 sm:min-w-44"
        />
      </div>
    );

}

