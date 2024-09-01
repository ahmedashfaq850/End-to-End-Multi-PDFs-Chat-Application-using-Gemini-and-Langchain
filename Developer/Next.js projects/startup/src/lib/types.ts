export interface MenuTabs {
  id: number;
  name: string;
  iconUrl: string;
  url: string;
}

export interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}


interface Activity {
  title: string;
  description: string;
  category: "Achievement" | "Skill";
  status: "Completed" | "In Progress";
  organization: string;
  id: string;
}

export interface OrganizationData {
  summary: string;
  activities: Activity[];
}

interface UserOrganizationDataMap {
  [organization: string]: OrganizationData;
}

export interface JobsSummariesData {
  user_organization_data_map: UserOrganizationDataMap;
}


// TESTIMONIALS PAGE

export interface Testimonial {
  author: {
    name: string;
    title: string;
    date: string; // ISO 8601 format date
    company: string;
    image_url: string;
    connection_level: string;
  };
  content: string;
}

export interface TestimonialsResponse {
  testimonials: Testimonial[];
}