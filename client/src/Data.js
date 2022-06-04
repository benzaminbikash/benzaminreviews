const reviews = [
    {
        id: 1,
        name: 'Sabina Dahal',
        job: 'American',
        image:
            'https://video.fktm10-1.fna.fbcdn.net/v/t39.30808-6/246164830_1259193821213289_8845771029103434443_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=E4b0oIrk8usAX8aa-Dy&_nc_ht=video.fktm10-1.fna&oh=00_AT-6tW6B6jJUau77GsY93DiC15ULqndJsb8OtzIpEW6pFg&oe=629FB00E',
        text:
            "America is one of the greatest countries. Some people say that it is the greatest in the world. Indeed, its influence is so huge. Today almost every political and economical issue in the world is discussed and decided not without control of America. Many people in the world long for living in America. A well-known lottery Green Card is the most popular nowadays. It gives a chance to those who want dwell in the USA.",
    },
    {
        id: 2,
        name: 'Pratima Das',
        job: 'BIT',
        image:
            'https://video.fktm10-1.fna.fbcdn.net/v/t39.30808-6/245302737_1998453870312533_8099015761643422136_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ri2tyt5sPhgAX9dQlgS&_nc_ht=video.fktm10-1.fna&oh=00_AT_95j-r5_GZFBkA7SIMRc6myU_DlDLpXnIXp6tWtSQjfQ&oe=62A01CCB',
        text:
            'A bachelor in information technology is a four-year degree that covers topics in ethical hacking, coding, and network design. This degree can help prepare you to work in computer and IT positions. Earning this degree can also serve as a stepping-stone toward earning a master or a doctorate in the technology field.',
    },
    {
        id: 3,
        name: 'Nischal Khanal',
        job: 'Australian',
        image:
            'https://video.fktm10-1.fna.fbcdn.net/v/t1.6435-9/199565350_3729361447289605_5023039004351340073_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eF-0-XUVCAgAX-iGyIt&_nc_ht=video.fktm10-1.fna&oh=00_AT9WJxiR5I1Gols03ttgVUd0k4w7IJ-EStiB-XmAvRJ6rA&oe=62C14938',
        text:
            'Australia is a beautiful country and a continent all in one. It is beautiful in its sense of rich and very long aboriginal culture, as well as its spectacular natural environment for example the Great Barrier Reef. The Australian society is very well educated with a literacy rate of 99% and overall Australia is a country with many great values.',
    },
    {
        id: 4,
        name: 'Sabin Poudel',
        job: 'BCA',
        image:
            'https://video.fktm10-1.fna.fbcdn.net/v/t39.30808-6/278358911_2995689130731528_1866164196987259329_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=Farla5sAJg4AX8B7EmG&_nc_ht=video.fktm10-1.fna&oh=00_AT__M7XoSXpe145dbxCtyp5Gf22nWKKvqN3fzTGyGjXMwQ&oe=62A00B2A',
        text:
            ' Bachelor of Computer Application (BCA) is a four-year, 8-semester undergraduate program of Tribhuvan University (TU) under the faculties of Humanities and Social Science. From the academic year, 2074/2075 TU launched this program. Firstly, this BCA program was launched only in six government colleges so-called constitute the campus of Tribhuvan University with an allocation of 35 seats for each campus. Tribhuvan University provides affiliation to 120 private colleges all over Nepal. All the colleges are running this program effectively.',
    },
    {
        id: 5,
        name: 'Salon Rajbahak',
        job: 'Army',
        image:
            'https://video.fktm10-1.fna.fbcdn.net/v/t39.30808-6/277098224_1841058739571486_4965840532146240803_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UCwMTvkmdcAAX9EeKfw&_nc_ht=video.fktm10-1.fna&oh=00_AT_nXNyr0de5dnbLzCZe1lABUfgw2_0Kt5kUPBw8xa232g&oe=629F9127',
        text:
            'Army is a part of the U.S. military which is made up of three branches. The other two components are the Air Force and Navy. All report directly to the Department of Defense or (DoD). The DoD is organized into two branches, the first is active duty and the second called the reserve. For the Army the DoD reserve departments that provide support are the United States Army eserve and the Army National Guard (Army.mil, 2012).',
    },
    {
        id: 6,
        name: 'Pawan Ghimire',
        job: 'BBS',
        image:
            'https://video.fktm10-1.fna.fbcdn.net/v/t39.30808-6/274868764_1364936150599850_3684867424818517972_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3oYsa0jINlAAX_LD84v&_nc_ht=video.fktm10-1.fna&oh=00_AT-QIMy7x-dSsr6LkGGwhTlvIfAi1cGQRB3nxlCFQ6l1TQ&oe=62A0859B',
        text:
            ' Bachelor of Business Studies (BBS) is a 4 years Bachelor Level Program. It is a course under the Faculty of Management or Commerce. This course can be taken after the completion of 10+2/ intermediate/ proficiency certificate/ equivalent level in Management, Science or other fields as well. Tribhuvan University (TU), Mid Western University (MWU or MU) and Far Western University (FWU or FU) offer this course in Nepal currently.',
    },
    {
        id: 7,
        name: 'Bijay Nepali',
        job: 'Tattooist',
        image:
            'https://video.fktm10-1.fna.fbcdn.net/v/t39.30808-6/272982874_3051847971798311_8323316572603635713_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EGUPElsnOcsAX-rCNng&_nc_ht=video.fktm10-1.fna&oh=00_AT86I-IFqMRy-YCBTOu9gP_ToJa7cSDPvBMEnP2PFfwTXQ&oe=629F0FAD',
        text:
            'Tattoos are becoming a popular phenomenon that is seen everywhere. Today youth are getting permanent tattoos to be cool and trendy, but are not considering the long-term effects. Teenagers should be aware of all that body modification may include, it is not just a pretty picture. Adolescences must consider the dangers and conscientious result of attaining diseases, being underage, and having a permanent mark on their body. The unsanitary conditions of getting a tattoo tend to go unnoticed by teenagers.',
    },
];

export default reviews;