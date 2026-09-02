export const createGoal = async (newGoal) => {
  try {
    const res = await fetch("/api/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGoal),
    });

    const data = await res.json();

    if (!res.ok) {
      const error = new Error(`HTTP Error! Status: ${res.status} ${data.msg}`);
      error.status = res.status;
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Goal cration failed: ", error, error.status || "");
    throw error;
  }
};
