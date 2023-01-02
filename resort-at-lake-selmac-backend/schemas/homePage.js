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
  name: 'heading5',
  title: 'Heading five',
  type: 'string',
  description: 'The Second Red Heading on the Page'
},
{
  name: 'image5',
title: 'Image five',
type: 'image',
},
{
name: 'content5',
title: 'Page text content five',
type: 'array', 
of: [{type: 'block'}],
description: 'Write the body text here'
},
{
  name: 'heading6',
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
  name: 'heading7',
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
  name: 'heading8',
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