
export const submitForm = async ({
  endpoint = "https://westernbookpublishing.com/api/sendEmail.php",
  formData,
  requiredFields = [],
  onSuccess = () => { },
  onError = (_errMsg) => { },
}) => {
  const errors = {};
  requiredFields.forEach((field) => {
    if (!formData[field] || formData[field].toString().trim() === "") {
      errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required *`;
    }
  });

  if (Object.keys(errors).length > 0) {
    return { success: false, validationErrors: errors };
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData),
    });

    const payload = await res.json();

    if (payload.status === "success") {
      onSuccess(payload);
      return { success: true };
    } else {
      onError(payload.message || "Server returned an error");
      return { success: false, serverError: payload.message || "" };
    }
  } catch (networkError) {
    onError(networkError.message || "Network error");
    return { success: false, networkError: networkError.message };
  }
};
