export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'Image1',
      title: 'image one',
      type: 'image',
    },
      {
          name: 'heading1',
          title: 'Page Heading',
          type: 'string',
          description: 'The First Heading On The Page'
      },
      {
        name: 'heading2',
        title: 'Heading two',
        type: 'string',
        description: 'The First Red Heading on the Page'
    },
      {
          name: 'content1',
          title: 'Page text content one',
          type: 'array', 
          of: [{type: 'block'}],
          description: 'Write the body text here'
      },
      {
        name: 'heading3',
        title: 'Heading three',
        type: 'string',
        description: 'The Second Red Heading on the Page'
    },
    {
      name: 'image2',
      title: 'Image two',
      type: 'image',
    },
    {
      name: 'content2',
      title: 'Page text content two',
      type: 'array', 
      of: [{type: 'block'}],
      description: 'Write the body text here'
  },
  {
    name: 'heading4',
    title: 'Heading four',
    type: 'string',
    description: 'The Second Red Heading on the Page'
},
{
  name: 'image4',
  title: 'Image four',
  type: 'image',
},
{
  name: 'content4',
  title: 'Page text content four',
  type: 'array', 
  of: [{type: 'block'}],
  description: 'Write the body text here'
},
{
name: 'cabins',
title: 'Cabins',
type: 'string',
description: 'Red heading CABINS'
},
{
name: 'cabinsContent',
title: 'Cabins paragraph',
type: 'array', 
of: [{type: 'block'}],
description: 'Write the cabins info text here'
},
{
name: 'cabinsImg1',
title: 'Cabins Image 1',
type: 'image',
},
{
name: 'cabinsImg2',
title: 'Cabins Image 2',
type: 'image',
},
{
name: 'cabinsImg3',
title: 'Cabins Image 3',
type: 'image',
},
{
name: 'cabinsImg4',
title: 'Cabins Image 4',
type: 'image',
},
{
name: 'cabinsImg5',
title: 'Cabins Image 5',
type: 'image',
},
{
name: 'cabinsImg6',
title: 'Cabins Image 6',
type: 'image',
},

// dog wash

{
  name: 'dogWash',
  title: 'Dog Wash',
  type: 'string',
  description: 'Red heading DOG WASH'
  },
  {
  name: 'dogWashContent',
  title: 'Dog Wash paragraph',
  type: 'array', 
  of: [{type: 'block'}],
  description: 'Write the dog wash info text here'
  },
  {
  name: 'dogWashImg1',
  title: 'Dog Wash Image 1',
  type: 'image',
  },
  {
  name: 'dogWashImg2',
  title: 'Dog Wash Image 2',
  type: 'image',
  },
  {
  name: 'dogWashImg3',
  title: 'Dog Wash Image 3',
  type: 'image',
  },
  {
  name: 'dogWashImg4',
  title: 'Dog Wash Image 4',
  type: 'image',
  },


{
name: 'heading5',
title: 'Heading five',
type: 'string',
description: 'The Second Red Heading on the Page'
},
{
name: 'content5',
title: 'Page text content five',
type: 'array', 
of: [{type: 'block'}],
description: 'Write the body text here'
},

{
  name: 'bulletPoints',
  title: 'Bullet Points',
  type: 'object',
  fields: [
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'list' // This specifies that the array should be displayed as a list
      }
    }
  ]
},

{
name: 'rentalImage5',
title: 'Rentals Image left',
type: 'image',
},
{
name: 'heading6',
title: 'Left Column Heading',
type: 'string', 
},
{
  name: 'Additional1',
  title: 'Aditional Info - this will only be displayed if you enter text:',
  type: 'string', 
  },
{
name: 'TentDaily',
title: 'Tent Daily Rate',
type: 'string', 
},
{
  name: 'TentWeekly',
  title: 'Tent Weekly Rate',
  type: 'string', 
  },
  {
    name: 'PartialHookupDaily',
    title: 'Partial Hookup Daily Rate',
    type: 'string', 
    },
    {
      name: 'PartialHookupWeekly',
      title: 'Partial Hookup Weekly Rate',
      type: 'string', 
      },
      {
        name: 'FullHookupDaily',
        title: 'Full Hookup Daily Rate',
        type: 'string', 
        },
        {
          name: 'FullHookupWeekly',
          title: 'Full Hookup Weekly Rate',
          type: 'string', 
          },
          {
            name: 'CabinDaily',
            title: 'Cabin Daily Rate',
            type: 'string', 
            },
            {
              name: 'CabinWeekly',
              title: 'Cabin Weekly Rate',
              type: 'string', 
              },
              {
                name: 'TipiDaily',
                title: 'Tipi Daily Rate',
                type: 'string', 
                },
                {
                  name: 'TipiWeekly',
                  title: 'Tipi Weekly Rate',
                  type: 'string', 
                  },
                  {
                    name: 'Additional2',
                    title: 'Aditional Info - this will only be displayed if you enter text:',
                    type: 'string', 
                    },
{
name: 'rentalImage6',
title: 'Rentals Image middle',
type: 'image',
},
{
name: 'heading7',
title: 'Middle Column Heading',
type: 'string', 
},
{
  name: 'Additiona3',
  title: 'Aditional Info - this will only be displayed if you enter text:',
  type: 'string', 
  },
{
  name: 'DumbStation',
  title: 'Cost of Dump Station:',
  type: 'string', 
  },
  {
    name: 'TentRVAdditionalPersonRate',
    title: 'Tent, Rv and Tipi Site Rate:',
    type: 'string', 
    },
    {
      name: 'Pets',
      title: 'Pets:',
      type: 'string', 
      },
      {
        name: 'CabinExtraInfo',
        title: 'Cabin Extra Info:',
        type: 'string', 
        },
        {
          name: 'SpaceHeaters',
          title: 'Space Heaters:',
          type: 'string', 
          },
          {
            name: 'Additional4',
            title: 'Aditional Info - this will only be displayed if you enter text:',
            type: 'string', 
            },
{
name: 'rentalImage7',
title: 'Rentals Image right',
type: 'image',
},
{
name: 'heading8',
title: 'Right Column Heading',
type: 'string', 
},
{
  name: 'Additional5',
  title: 'Aditional Info - this will only be displayed if you enter text:',
  type: 'string', 
  },
{
  name: 'BoatsandTrollingMotors',
  title: 'Boats with Trolling Motor:',
  type: 'string', 
  },
  {
    name: 'PedalBoats',
    title: 'Pedal Boats:',
    type: 'string', 
    },
    {
      name: 'KayakOrCanoe',
      title: 'Kayak or Canoe:',
      type: 'string', 
      },
      {
        name: 'StandUpPaddleBoard',
        title: 'Stand Up Paddle Board:',
        type: 'string', 
        },
          {
            name: 'Additional6',
            title: 'Aditional Info - this will only be displayed if you enter text:',
            type: 'string', 
            },
{
name: 'heading9',
title: 'Heading six',
type: 'string',
description: 'The Second Red Heading on the Page'
},
{
name: 'image6',
title: 'Image six',
type: 'image',
},
{
name: 'content6',
title: 'Page text content six',
type: 'array', 
of: [{type: 'block'}],
description: 'Write the body text here'
},
{
name: 'heading10',
title: 'Heading seven',
type: 'string',
description: 'The Second Red Heading on the Page'
},
{
name: 'image7',
title: 'Image seven',
type: 'image',
},
{
name: 'content7',
title: 'Page text content seven',
type: 'array', 
of: [{type: 'block'}],
description: 'Write the body text here'
},
{
name: 'heading11',
title: 'Heading eight',
type: 'string',
description: 'The Second Red Heading on the Page'
},
{
name: 'image8',
title: 'Image eight',
type: 'image',
},
{
name: 'content8',
title: 'Page text content eight',
type: 'array', 
of: [{type: 'block'}],
description: 'Write the body text here'
},
  ],
}