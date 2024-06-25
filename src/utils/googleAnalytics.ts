// utils/googleAnalytics.ts

export const logButtonClickEvent = (action: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "button_click", {
      event_category: "Get Started Button Click",
      event_label: action,
      value: 1,
    });
  }
};
