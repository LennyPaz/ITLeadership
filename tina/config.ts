import { defineConfig } from 'tinacms'

// Available icons for dropdown selections
const iconOptions = [
  'Heart', 'Users', 'BookOpen', 'Star', 'Shield', 'Apple', 'Clock',
  'Utensils', 'FileEdit', 'GraduationCap', 'Briefcase', 'Award',
  'Gift', 'Home', 'CreditCard', 'Mail', 'Building', 'HandHeart', 'Calendar'
]

export default defineConfig({
  branch: process.env.TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.NEXT_PUBLIC_TINA_TOKEN || '',
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      // Site Settings
      {
        name: 'settings',
        label: 'Site Settings',
        path: 'content',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
          global: true,
        },
        match: { include: 'settings' },
        fields: [
          { type: 'string', name: 'organizationName', label: 'Organization Name', required: true, description: 'The official name shown across the site' },
          { type: 'string', name: 'tagline', label: 'Tagline', required: true, description: 'Short motto or slogan' },
          { type: 'string', name: 'phone', label: 'Phone Number', description: 'Format: (850) 222-6133' },
          { type: 'string', name: 'email', label: 'Contact Email' },
          {
            type: 'object',
            name: 'address',
            label: 'Address',
            fields: [
              { type: 'string', name: 'street', label: 'Street' },
              { type: 'string', name: 'city', label: 'City' },
              { type: 'string', name: 'state', label: 'State' },
              { type: 'string', name: 'zip', label: 'ZIP Code' },
            ],
          },
          {
            type: 'object',
            name: 'hours',
            label: 'Hours',
            fields: [
              { type: 'string', name: 'weekdays', label: 'Weekday Hours' },
              { type: 'string', name: 'weekend', label: 'Weekend Hours' },
            ],
          },
          { type: 'string', name: 'volunteerEmail', label: 'Volunteer Email' },
          { type: 'string', name: 'ein', label: 'EIN Number' },
          { type: 'number', name: 'yearFounded', label: 'Year Founded' },
        ],
      },

      // Founder Information
      {
        name: 'founder',
        label: 'Founder Profile',
        path: 'content',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
          global: true,
        },
        match: { include: 'founder' },
        fields: [
          { type: 'string', name: 'name', label: 'Full Name', required: true },
          { type: 'string', name: 'title', label: 'Title/Position', description: 'e.g., Founder & Executive Director' },
          { type: 'image', name: 'photo', label: 'Profile Photo' },
          { type: 'string', name: 'shortBio', label: 'Short Bio', ui: { component: 'textarea' }, description: 'Brief intro shown on home page (2-3 sentences)' },
          { type: 'string', name: 'fullBio', label: 'Full Biography', ui: { component: 'textarea' }, description: 'Complete story shown on About page' },
          {
            type: 'string',
            name: 'quotes',
            label: 'Inspirational Quotes',
            list: true,
            description: 'Featured quotes from the founder',
          },
        ],
      },

      // Values & Mission
      {
        name: 'values',
        label: 'Values & Mission',
        path: 'content',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        match: { include: 'values' },
        fields: [
          { type: 'string', name: 'mission', label: 'Mission Statement', ui: { component: 'textarea' } },
          { type: 'string', name: 'vision', label: 'Vision Statement', ui: { component: 'textarea' } },
          {
            type: 'object',
            name: 'values',
            label: 'Core Values',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || 'New Value' }) },
            fields: [
              { type: 'string', name: 'title', label: 'Title', required: true },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
              { type: 'string', name: 'icon', label: 'Icon', options: iconOptions },
            ],
          },
        ],
      },

      // Timeline / History
      {
        name: 'timeline',
        label: 'Our History',
        path: 'content',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        match: { include: 'timeline' },
        fields: [
          {
            type: 'object',
            name: 'items',
            label: 'Milestones',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.year ? `${item.year} - ${item.title}` : 'New Milestone' }) },
            fields: [
              { type: 'string', name: 'year', label: 'Year', required: true },
              { type: 'string', name: 'title', label: 'Milestone Title', required: true },
              { type: 'string', name: 'description', label: 'What Happened', ui: { component: 'textarea' } },
            ],
          },
        ],
      },

      // Programs
      {
        name: 'programs',
        label: 'Nursery Program',
        path: 'content',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        match: { include: 'programs' },
        fields: [
          { type: 'string', name: 'ageRange', label: 'Age Range', description: 'e.g., 1-3 Years' },
          { type: 'string', name: 'hours', label: 'Operating Hours', description: 'e.g., 7 AM - 6 PM' },
          { type: 'string', name: 'days', label: 'Days Open', description: 'e.g., Mon - Fri' },
          { type: 'string', name: 'status', label: 'Enrollment Status', description: 'e.g., Now Enrolling, Waitlist, Closed' },
          {
            type: 'object',
            name: 'features',
            label: 'Program Features',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || 'New Feature' }) },
            fields: [
              { type: 'string', name: 'title', label: 'Title', required: true },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
              { type: 'string', name: 'icon', label: 'Icon', options: iconOptions },
            ],
          },
          {
            type: 'object',
            name: 'dailySchedule',
            label: 'Daily Schedule',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.time || 'New Time Slot' }) },
            fields: [
              { type: 'string', name: 'time', label: 'Time', required: true },
              { type: 'string', name: 'activity', label: 'Activity', required: true },
            ],
          },
          {
            type: 'object',
            name: 'enrollmentSteps',
            label: 'Enrollment Steps',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || 'New Step' }) },
            fields: [
              { type: 'number', name: 'step', label: 'Step Number', required: true },
              { type: 'string', name: 'title', label: 'Title', required: true },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
            ],
          },
          { type: 'string', name: 'requiredDocuments', label: 'Required Documents', list: true },
          { type: 'string', name: 'learningAreas', label: 'Learning Areas', list: true },
          { type: 'string', name: 'keyPoints', label: 'Key Points', list: true },
        ],
      },

      // Volunteer Opportunities
      {
        name: 'volunteer',
        label: 'Volunteer Page',
        path: 'content',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        match: { include: 'volunteer-opportunities' },
        fields: [
          {
            type: 'object',
            name: 'items',
            label: 'Volunteer Opportunities',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || 'New Opportunity' }) },
            fields: [
              { type: 'string', name: 'title', label: 'Title', required: true },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
              { type: 'string', name: 'commitment', label: 'Time Commitment' },
              { type: 'string', name: 'icon', label: 'Icon', options: iconOptions },
              { type: 'string', name: 'skills', label: 'Required Skills', list: true },
            ],
          },
          {
            type: 'object',
            name: 'benefits',
            label: 'Volunteer Benefits',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || 'New Benefit' }) },
            fields: [
              { type: 'string', name: 'title', label: 'Title', required: true },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
              { type: 'string', name: 'icon', label: 'Icon', options: iconOptions },
            ],
          },
          {
            type: 'object',
            name: 'applicationSteps',
            label: 'Application Steps',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || 'New Step' }) },
            fields: [
              { type: 'number', name: 'step', label: 'Step Number', required: true },
              { type: 'string', name: 'title', label: 'Title', required: true },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
            ],
          },
        ],
      },

      // Donation Tiers
      {
        name: 'donations',
        label: 'Donate Page',
        path: 'content',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        match: { include: 'donation-tiers' },
        fields: [
          {
            type: 'object',
            name: 'items',
            label: 'Donation Tiers',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.amount ? `$${item.amount}` : 'New Tier' }) },
            fields: [
              { type: 'number', name: 'amount', label: 'Amount ($)', required: true },
              { type: 'string', name: 'impact', label: 'Impact Description', ui: { component: 'textarea' } },
              { type: 'string', name: 'icon', label: 'Icon', options: iconOptions },
              { type: 'boolean', name: 'popular', label: 'Mark as Popular' },
            ],
          },
          {
            type: 'object',
            name: 'waysToGive',
            label: 'Ways to Give',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || 'New Method' }) },
            fields: [
              { type: 'string', name: 'title', label: 'Title', required: true },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
              { type: 'string', name: 'icon', label: 'Icon', options: iconOptions },
            ],
          },
          {
            type: 'object',
            name: 'fundAllocation',
            label: 'Fund Allocation',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || 'New Category' }) },
            fields: [
              { type: 'string', name: 'label', label: 'Category', required: true },
              { type: 'number', name: 'percent', label: 'Percentage', required: true },
              { type: 'string', name: 'color', label: 'Color Class', description: 'CSS class: bg-primary, bg-accent-honey, or bg-secondary' },
            ],
          },
        ],
      },

      // Campaign
      {
        name: 'campaign',
        label: 'Fundraising Campaign',
        path: 'content',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
          global: true,
        },
        match: { include: 'campaign' },
        fields: [
          { type: 'string', name: 'title', label: 'Campaign Title', required: true, description: 'e.g., Thanksgiving Meal Program' },
          { type: 'number', name: 'year', label: 'Campaign Year' },
          { type: 'string', name: 'description', label: 'Campaign Description', ui: { component: 'textarea' }, description: 'Explain what the campaign supports' },
          { type: 'number', name: 'goalAmount', label: 'Fundraising Goal ($)', description: 'Target amount to raise' },
          { type: 'number', name: 'currentAmount', label: 'Amount Raised ($)', description: 'Update this as donations come in' },
          { type: 'string', name: 'mealsServed', label: 'Meals Served', description: 'e.g., 2,000+' },
          { type: 'string', name: 'familiesFed', label: 'Families Fed', description: 'e.g., 500+' },
          { type: 'boolean', name: 'active', label: 'Show Campaign on Site', description: 'Toggle to show/hide the campaign banner' },
        ],
      },

      // Stats
      {
        name: 'stats',
        label: 'Statistics',
        path: 'content',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        match: { include: 'stats' },
        fields: [
          {
            type: 'object',
            name: 'homeStats',
            label: 'Home Page Stats',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || 'New Stat' }) },
            fields: [
              { type: 'string', name: 'number', label: 'Number/Value', required: true },
              { type: 'string', name: 'label', label: 'Label', required: true },
              { type: 'string', name: 'icon', label: 'Icon', options: iconOptions },
            ],
          },
          {
            type: 'object',
            name: 'volunteerStats',
            label: 'Volunteer Page Stats',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || 'New Stat' }) },
            fields: [
              { type: 'string', name: 'number', label: 'Number/Value', required: true },
              { type: 'string', name: 'label', label: 'Label', required: true },
            ],
          },
          {
            type: 'object',
            name: 'donateStats',
            label: 'Donate Page Stats',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || 'New Stat' }) },
            fields: [
              { type: 'string', name: 'number', label: 'Number/Value', required: true },
              { type: 'string', name: 'label', label: 'Label', required: true },
            ],
          },
        ],
      },

      // Testimonials
      {
        name: 'testimonials',
        label: 'Testimonials',
        path: 'content',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        match: { include: 'testimonials' },
        fields: [
          {
            type: 'object',
            name: 'items',
            label: 'Testimonials',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.author || 'New Testimonial' }) },
            fields: [
              { type: 'string', name: 'quote', label: 'Quote', required: true, ui: { component: 'textarea' } },
              { type: 'string', name: 'author', label: 'Author Name', required: true },
              { type: 'string', name: 'role', label: 'Role/Title' },
              { type: 'image', name: 'image', label: 'Photo (optional)' },
              {
                type: 'string',
                name: 'showOn',
                label: 'Show On Pages',
                list: true,
                options: ['home', 'volunteer', 'donate', 'programs', 'about'],
              },
            ],
          },
        ],
      },

      // Gallery
      {
        name: 'gallery',
        label: 'Photo Gallery',
        path: 'content',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        match: { include: 'gallery' },
        fields: [
          {
            type: 'object',
            name: 'items',
            label: 'Photos',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.alt || 'New Photo' }) },
            fields: [
              { type: 'image', name: 'src', label: 'Image', required: true },
              { type: 'string', name: 'alt', label: 'Image Description', required: true, description: 'Describe the photo for accessibility' },
              {
                type: 'string',
                name: 'category',
                label: 'Category',
                options: ['community', 'children', 'meals', 'volunteers'],
                description: 'Which gallery tab should show this photo',
              },
              {
                type: 'string',
                name: 'focalPoint',
                label: 'Focal Point',
                options: ['center', 'top', 'bottom', 'left', 'right'],
                description: 'Where to focus when cropping the image (default: center)',
              },
            ],
          },
        ],
      },

      // Gallery Categories
      {
        name: 'galleryCategories',
        label: 'Gallery Tabs',
        path: 'content',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        match: { include: 'gallery-categories' },
        fields: [
          {
            type: 'object',
            name: 'items',
            label: 'Filter Tabs',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || 'New Tab' }) },
            fields: [
              { type: 'string', name: 'id', label: 'ID', required: true, description: 'Lowercase, no spaces (e.g., community, nursery)' },
              { type: 'string', name: 'label', label: 'Tab Label', required: true, description: 'What users see (e.g., Community, Nursery School)' },
            ],
          },
        ],
      },
    ],
  },
})

