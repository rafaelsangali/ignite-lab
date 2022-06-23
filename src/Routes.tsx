import { BrowserRouter, Route, Routes as RoutesReact } from "react-router-dom";
import { Event } from "./pages/Event";

export function Routes(){
  return (
    <BrowserRouter>
      <RoutesReact>
        <Route path="/" element="home" />
        <Route path="/event" element={<Event />} />
        <Route path="/event/lesson/:slug" element={<Event />} />
      </RoutesReact>
    </BrowserRouter>
  )
}