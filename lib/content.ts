import fs from 'fs'
import path from 'path'

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface SiteSettings {
  organizationName: string
  tagline: string
  phone: string
  email: string
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
  hours: {
    weekdays: string
    weekend: string
  }
  volunteerEmail: string
  ein: string
  yearFounded: number
}

export interface Stat {
  number: string
  label: string
  icon?: string
}

export interface Stats {
  homeStats: Stat[]
  volunteerStats: Stat[]
  donateStats: Stat[]
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  showOn: ('home' | 'volunteer')[]
}

export interface Testimonials {
  items: Testimonial[]
}

export interface GalleryCategory {
  id: string
  label: string
}

export interface GalleryImage {
  src: string
  alt: string
  category: string
}

export interface GalleryCategories {
  items: GalleryCategory[]
}

export interface Gallery {
  items: GalleryImage[]
}

export interface ProgramFeature {
  title: string
  description: string
  icon: string
}

export interface ScheduleItem {
  time: string
  activity: string
}

export interface EnrollmentStep {
  step: number
  title: string
  description: string
}

export interface Programs {
  ageRange: string
  hours: string
  days: string
  status: string
  features: ProgramFeature[]
  dailySchedule: ScheduleItem[]
  enrollmentSteps: EnrollmentStep[]
  requiredDocuments: string[]
  learningAreas: string[]
  keyPoints: string[]
}

export interface VolunteerOpportunity {
  title: string
  description: string
  commitment: string
  icon: string
  skills: string[]
}

export interface VolunteerBenefit {
  title: string
  description: string
  icon: string
}

export interface ApplicationStep {
  step: number
  title: string
  description: string
}

export interface VolunteerOpportunities {
  items: VolunteerOpportunity[]
  benefits: VolunteerBenefit[]
  applicationSteps: ApplicationStep[]
}

export interface DonationTier {
  amount: number
  impact: string
  icon: string
  popular: boolean
}

export interface WayToGive {
  title: string
  description: string
  icon: string
}

export interface FundAllocation {
  label: string
  percent: number
  color: string
}

export interface DonationTiers {
  items: DonationTier[]
  waysToGive: WayToGive[]
  fundAllocation: FundAllocation[]
}

export interface TimelineItem {
  year: string
  title: string
  description: string
}

export interface Timeline {
  items: TimelineItem[]
}

export interface Campaign {
  title: string
  year: number
  description: string
  goalAmount: number
  currentAmount: number
  mealsServed: string
  familiesFed: string
  active: boolean
}

export interface Value {
  title: string
  description: string
  icon: string
}

export interface Values {
  mission: string
  vision: string
  values: Value[]
}

export interface Founder {
  name: string
  title: string
  photo: string
  shortBio: string
  fullBio: string
  quotes: string[]
}

// ============================================
// CONTENT LOADING FUNCTIONS
// ============================================

const contentDirectory = path.join(process.cwd(), 'content')

function loadJsonFile<T>(filename: string): T {
  const filePath = path.join(contentDirectory, filename)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContents) as T
}

// Settings
export function getSettings(): SiteSettings {
  return loadJsonFile<SiteSettings>('settings.json')
}

// Stats
export function getStats(): Stats {
  return loadJsonFile<Stats>('stats.json')
}

// Testimonials
export function getTestimonials(): Testimonials {
  return loadJsonFile<Testimonials>('testimonials.json')
}

export function getHomeTestimonials(): Testimonial[] {
  const testimonials = getTestimonials()
  return testimonials.items.filter(t => t.showOn.includes('home'))
}

export function getVolunteerTestimonials(): Testimonial[] {
  const testimonials = getTestimonials()
  return testimonials.items.filter(t => t.showOn.includes('volunteer'))
}

// Gallery
export function getGalleryCategories(): GalleryCategories {
  return loadJsonFile<GalleryCategories>('gallery-categories.json')
}

export function getGallery(): Gallery {
  return loadJsonFile<Gallery>('gallery.json')
}

// Programs
export function getPrograms(): Programs {
  return loadJsonFile<Programs>('programs.json')
}

// Volunteer Opportunities
export function getVolunteerOpportunities(): VolunteerOpportunities {
  return loadJsonFile<VolunteerOpportunities>('volunteer-opportunities.json')
}

// Donation Tiers
export function getDonationTiers(): DonationTiers {
  return loadJsonFile<DonationTiers>('donation-tiers.json')
}

// Timeline
export function getTimeline(): Timeline {
  return loadJsonFile<Timeline>('timeline.json')
}

// Campaign
export function getCampaign(): Campaign {
  return loadJsonFile<Campaign>('campaign.json')
}

// Values
export function getValues(): Values {
  return loadJsonFile<Values>('values.json')
}

// Founder
export function getFounder(): Founder {
  return loadJsonFile<Founder>('founder.json')
}

// ============================================
// HELPER FUNCTIONS
// ============================================

// Get formatted address string
export function getFormattedAddress(settings: SiteSettings): string {
  const { street, city, state, zip } = settings.address
  return `${street}, ${city}, ${state} ${zip}`
}

// Get campaign progress percentage
export function getCampaignProgress(campaign: Campaign): number {
  return Math.round((campaign.currentAmount / campaign.goalAmount) * 100)
}

// Format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}
