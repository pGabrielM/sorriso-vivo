// Dental service interfaces
export interface IService {
  icon: string;
  titleKey?: string;
  title?: string;
  descriptionKey?: string;
  description?: string;
  featuresKeys?: string[];
  features?: string[];
}

// Dentist/Team member interfaces
export interface ITeamMember {
  nameKey?: string;
  name?: string;
  roleKey?: string;
  role?: string;
  specialtyKey?: string;
  specialty?: string;
  image: string;
  croKey?: string;
  cro?: string;
  bioKey?: string;
  bio?: string;
}

// Testimonial interfaces
export interface ITestimonial {
  nameKey?: string;
  name?: string;
  image: string;
  rating: number | string;
  textKey?: string;
  text?: string;
  date: string;
  treatmentKey?: string;
  treatment?: string;
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
