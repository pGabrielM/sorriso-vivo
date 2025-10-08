// Dental service interfaces
export interface IService {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

// Dentist/Team member interfaces
export interface ITeamMember {
  name: string;
  role: string;
  specialty: string;
  image: string;
  cro: string;
  bio: string;
}

// Testimonial interfaces
export interface ITestimonial {
  name: string;
  image: string;
  rating: number;
  text: string;
  date: string;
  treatment: string;
}

// Booking form interfaces
export interface IBookingData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}

// Contact form interfaces
export interface IContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
