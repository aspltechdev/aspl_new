
const API_BASE = (
  import.meta.env.VITE_API_BASE_URL || "https://aspltech.in/api"
).replace(/\/+$/, "");

// Common API function
export const adminApi = async (endpoint, options = {}) => {
  const token = localStorage.getItem("adminToken");

  const isFormData = options.body instanceof FormData;

  const headers = {
    ...(isFormData ? {} : { "Content-Type": "application/json" }),
    ...options.headers,
  };

  // Attach token for protected admin requests
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  // Handle empty or JSON responses
  const contentType = response.headers.get("content-type");
  const data = contentType?.includes("application/json")
    ? await response.json()
    : await response.text();

  // Handle expired or invalid login session
  if (response.status === 401) {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    if (window.location.pathname !== "/admin") {
      window.location.href = "/admin";
    }
  }

  if (!response.ok) {
    throw new Error(
      data?.message || data || "Something went wrong"
    );
  }

  return data;
};

// Download applicant resume
export const downloadResume = async (id, applicantName = "applicant") => {
  const token = localStorage.getItem("adminToken");

  const response = await fetch(
    `${API_BASE}/applications/${id}/resume`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Unable to download resume");
  }

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${applicantName}-resume`;
  document.body.appendChild(link);
  link.click();
  link.remove();

  window.URL.revokeObjectURL(url);
};

// Admin logout
export const adminLogout = () => {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminUser");
  window.location.href = "/admin";
};
