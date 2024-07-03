import { PropsWithChildren } from "react";

import AuthProvider from "@/context/auth.context";

function ProvidersLayout({ children }: PropsWithChildren) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default ProvidersLayout;
