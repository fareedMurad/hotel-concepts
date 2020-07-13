const useProgramPageData = () => {
  const data = [
    {
      id: 1,
      introInfo: {
        name: "Intial Hotel Planning Decisions Course",
        description: "We know which problems hoteliers face every day and we are ready to solve these problems.",
        videoInfo: {
          path: "ForCorporateClients.preview",
          time: "0:56"
        }
      },
      overview: {
        month: 4,
        sprints: 16,
        date: "September 10, 2019",
        languages: ["English", "Italian"]
      },
      about: {
        text: "Digital marketing has emerged as the pillar of many businesses’ promotion and branding strategy. In this program, you will gain general knowledge about the principles of digital marketing and acquire the skills, analytical techniques and approaches to apply digitalst rategies effectively for customer acquisition, engagement and retention.",
        skills: ["Digital marketing", "Branding Strategy", "Creative thinking", "Creative thinking"]
      },
      shouldEnroll: {
        text: "",
        roles: ["Operations Admin", "Industry Analyst", "Customer Manager", "Product Manager"]
      },
      modules: [
        {
          name: "Marketing Fundamentals",
          weeks: 2,
          hrhWeek: 2,
          description: "Digital marketing has emerged as the pillar of many businesses’ promotion and branding strategy."
        },
        {
          name: "Content strategy",
          weeks: 2,
          hrhWeek: 2,
          description: "Digital marketing has emerged as the pillar of many businesses’ promotion and branding strategy."
        },
        {
          name: "Social Media Marketing",
          weeks: 2,
          hrhWeek: 2,
          description: "Digital marketing has emerged as the pillar of many businesses’ promotion and branding strategy."
        },
        {
          name: "Display Advertising",
          weeks: 2,
          hrhWeek: 2,
          description: "Digital marketing has emerged as the pillar of many businesses’ promotion and branding strategy."
        },
        {
          name: "Email Marketing",
          weeks: 2,
          hrhWeek: 2,
          description: "Digital marketing has emerged as the pillar of many businesses’ promotion and branding strategy."
        },
        {
          name: "Measure and Optimise",
          weeks: 2,
          hrhWeek: 2,
          description: "Digital marketing has emerged as the pillar of many businesses’ promotion and branding strategy."
        }
      ],
      results: [
        "Categorize consumer expectations and behavior across digital platforms.",
        "Apply market segmentation techniques.",
        "Interpret digital marketing analytics to distinguishcustomers.",
        "Develop strategies for customer relationship management.",
        "Explain the key issues and challenges of digital marketing."
      ],
      learningApproach: [
        {
          name: "Sprints",
          description: "Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high impact skills that are needed in today’s hospitality ecosystem."
        },
        {
          name: "Tests & Quizzes",
          description: "Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high impact skills that are needed in today’s hospitality ecosystem."
        },
        {
          name: "Videos",
          description: "Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high impact skills that are needed in today’s hospitality ecosystem."
        },
        {
          name: "Case Studies",
          description: "Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high impact skills that are needed in today’s hospitality ecosystem."
        },
        {
          name: "Practical Assignments",
          description: "Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high impact skills that are needed in today’s hospitality ecosystem."
        },
        {
          name: "Q&A sessions",
          description: "Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high impact skills that are needed in today’s hospitality ecosystem."
        }
      ],
      additionalInfo: [
        "Marketing analysis of the market. Review of best practices",
        "How to calculate brand equity",
        "Market and consumer analysis. Examples",
        "Positioning checklist",
        "5 examples of good and bad positioning"
      ],
      enrollInfo: [
        {
          name: "Self Education",
          description: "For teams that need to create project plans with confidence.",
          price: "39.99",
          features: [
            "180 days of access to high-quality",
            "Self-paced learning content designed by industry experts"
          ],
          isEnrollReady: true,
          isMostPopular: false
        },
        {
          name: "Flexible Education",
          description: "For teams that need to create project plans with confidence.",
          price: "79.99",
          features: [
            "90 days of access to 5 instructor-led courses",
            "180 days of access to high-quality, self-paced learning content"
          ],
          isEnrollReady: true,
          isMostPopular: true
        },
        {
          name: "Enterprise",
          description: "For teams that need to create project plans with confidence.",
          price: "",
          features: [
            "Enterprise-class learning management system",
            "Enhanced reporting for individuals and teams",
            "24x7 teaching assistance and support"
          ],
          isEnrollReady: false,
          isMostPopular: false
        }
      ]
    }
  ];
  return { data };
};

export { useProgramPageData };
