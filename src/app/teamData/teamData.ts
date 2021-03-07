import { DataTypes } from '../dataTypes/dataTypes';

export const departmentTeams: DataTypes = {
  teams: [
    {
        id: 1,
        name: "Frontend Team",
        percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
    },
    {
        id: 2,
        name: "Designers",
        percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
    },
    {
        id:3,
        name: "Backend Team",
        percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
    },
    {
        id:4,
        name: "Managers",
        percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
    }
  ],
  users: [
    {
        id: 1,
        name: "FE_Team_User1",
        teamId: 1
    },
    {
        id: 2,
        name: "FE_Team_User2",
        teamId: 1
    },
    {
        id: 3,
        name: "FE_Team_User3",
        teamId: 1
    },
    {
        id: 4,
        name: "FE_Team_User4",
        teamId: 1
    },
    {
        id: 5,
        name: "FE_Team_User5",
        teamId: 1
    },
    {
        id: 6,
        name: "Des_Team_User1",
        teamId: 2
    },
    {
        id: 7,
        name: "Des_Team_User2",
        teamId: 2
    },
    {
        id: 8,
        name: "Des_Team_User3",
        teamId: 2
    },
    {
        id: 9,
        name: "Des_Team_User4",
        teamId: 2
    },
    {
        id: 10,
        name: "Des_Team_User5",
        teamId: 2
    },
    {
        id: 11,
        name: "Des_Team_User6",
        teamId: 2
    },
    {
      id: 12,
      name: "BE_Team_User1",
      teamId: 3
    },
    {
        id: 13,
        name: "BE_Team_User2",
        teamId: 3
      },
      {
        id: 14,
        name: "BE_Team_User3",
        teamId: 3
      },
      {
        id: 15,
        name: "BE_Team_User4",
        teamId: 3
      },
      {
        id: 16,
        name: "BE_Team_User5",
        teamId: 3
      },
      {
        id: 17,
        name: "BE_Team_User6",
        teamId: 3
      },
    {
      id: 18,
      name: 'Man_Team_User1',
      teamId: 4
    },
    {
        id: 19,
        name: 'Man_Team_User2',
        teamId: 4
      },
      {
        id: 20,
        name: 'Man_Team_User3',
        teamId: 4
      },
      {
        id: 21,
        name: 'Man_Team_User4',
        teamId: 4
      },
      {
        id: 22,
        name: 'Man_Team_User5',
        teamId: 4
      },
      {
        id: 23,
        name: 'Man_Team_User6',
        teamId: 4
      },
          
  ],
  vacations: [
    {
      id: 1,
      startDate: '25.11.2020',
      endDate: '15.12.2020',
      userId: 1,
      isPaid: false
    },
    {
      id: 2,
      startDate: '31.12.2020',
      endDate: '07.01.2021',
      userId: 1,
      isPaid: true
    },
    {
      id: 3,
      startDate: '30.11.2020',
      endDate: '04.12.2020',
      userId: 2,
      isPaid: false
    },
    {
      id: 4,
      startDate: '20.03.2021',
      endDate: '22.03.2021',
      userId: 2,
      isPaid: false
    },


    {
      id: 5,
      startDate: '10.12.2020',
      endDate: '15.12.2020',
      userId: 3,
      isPaid: true
    },
    {
      id: 6,
      startDate: '05.02.2021',
      endDate: '15.02.2021',
      userId: 3,
      isPaid: true
    },
    {
      id: 7,
      startDate: '01.02.2021',
      endDate: '10.02.2021',
      userId: 4,
      isPaid: true
    },
    {
      id: 8,
      startDate: '20.02.2021',
      endDate: '22.02.2021',
      userId: 4,
      isPaid: false
    },


    {
      id: 9,
      startDate: '02.12.2020',
      endDate: '03.12.2020',
      userId: 5,
      isPaid: true
    },
    {
      id: 10,
      startDate: '05.02.2021',
      endDate: '15.02.2021',
      userId: 5,
      isPaid: true
    },
    {
      id: 11,
      startDate: '08.12.2020',
      endDate: '21.12.2020',
      userId: 6,
      isPaid: false
    },
    {
      id: 12,
      startDate: '20.02.2021',
      endDate: '22.02.2021',
      userId: 6,
      isPaid: false
    }
  ]
};
