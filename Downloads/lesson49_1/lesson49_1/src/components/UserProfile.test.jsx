import { render, screen } from "@testing-library/react";
import { describe, it, beforeEach, afterEach, expect, vi } from "vitest";
import UserProfile from "./UserProfile.jsx";

describe("UserProfile (async)", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
    global.fetch = originalFetch;
  });

  it("shows loading indicator while request is in progress", () => {
    global.fetch.mockImplementation(() => new Promise(() => {}));
    render(<UserProfile />);
    expect(screen.getByRole("status")).toHaveTextContent("Loading...");
  });

  it("renders user data after successful request", async () => {
    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ name: "Leanne Graham", email: "leanne@example.com" }),
    });

    render(<UserProfile />);
    expect(await screen.findByText("Leanne Graham")).toBeInTheDocument();
    expect(screen.getByText("leanne@example.com")).toBeInTheDocument();
  });

  it("renders error message when request fails (non-OK response)", async () => {
    global.fetch.mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({}),
    });

    render(<UserProfile />);
    const alert = await screen.findByRole("alert");
    expect(alert).toHaveTextContent("Request failed: 500");
  });

  it("renders error message when fetch throws", async () => {
    global.fetch.mockRejectedValue(new Error("Network error"));

    render(<UserProfile />);
    const alert = await screen.findByRole("alert");
    expect(alert).toHaveTextContent("Network error");
  });
});
