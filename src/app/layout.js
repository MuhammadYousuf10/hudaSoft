import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/theme/theme";
import AppBarLayer from "@/components/layout/appBar";

export const metadata = {
  title: "Website",
  description: "Public-facing layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBarLayer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
