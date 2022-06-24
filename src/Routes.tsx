import { BrowserRouter, Route, Routes as RoutesReact } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Routes(){
  return (
    <BrowserRouter>
      <RoutesReact>
        <Route path="/" element={<Subscribe />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/lesson/:slug" element={<Event />} />
      </RoutesReact>
    </BrowserRouter>
  )
}