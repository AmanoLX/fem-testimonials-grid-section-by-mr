import Testimonial from './Testimonial';

const Testimonials = ({ testimonials }) => {
  return (
    <section className="container">
      {testimonials.map((testimonial) => {
        return <Testimonial key={testimonial.id} {...testimonial} />;
      })}
    </section>
  );
};
export default Testimonials;
