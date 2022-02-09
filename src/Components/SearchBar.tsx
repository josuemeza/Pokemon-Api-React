import { useState } from "react";

export default function ({ searchName, setSearchName }: any) {
  function handleChange(e: any) {
    setSearchName(e.target.value);
  }

  return <input value={searchName} onChange={handleChange}></input>;
}
