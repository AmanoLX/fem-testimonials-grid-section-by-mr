import { useState } from 'react';
import Testimonials from './Testimonials';
import './index.css';
import testimonialsData from './data';

function App() {
  const [testimonials, setTestimonials] = useState(testimonialsData);
  return (
    <main>
      <Testimonials testimonials={testimonials} />
    </main>
  );
}

export default App;
