const ROLE = {
  PT: 'PT',
  FULL_TIME: 'FULL_TIME',
  MANAGER: 'MANAGER',
}

// 根據營收以及個人職級計算每月應得薪資
const PayrollManager = {
  // 取得每個職級的基本薪資
  getBaseSalaryByRole: function (role) {
    switch (role) {
      case ROLE.PT:
        return 22000;
      case ROLE.FULL_TIME:
        return 40000;
      case ROLE.MANAGER:
        return 60000;
    }
  },

  // 根據營收取得每個人的基底獎金
  getBaseBonusPerPerson: function (revenue) {
    if (revenue >= 1000000) {
      return 5000;
    } else if (revenue >= 750000) {
      return 3000;
    } else if (revenue >= 500000) {
      return 2000;
    } else if (revenue >= 300000) {
      return 1500;
    } else if (revenue >= 200000) {
      return 1000;
    }

    return 0;
  },

  // 根據職級取得激勵獎金
  getIncentiveBonusByRole: function (revenue, role) {
    if (revenue >= 1000000) {
      switch (role) {
        case ROLE.PT:
          return 1000;
        case ROLE.FULL_TIME:
          return 2000;
        case ROLE.MANAGER:
          return 6000;
      }
    } else if (revenue >= 500000) {
      switch (role) {
        case ROLE.PT:
          return 200;
        case ROLE.FULL_TIME:
          return 1000;
        case ROLE.MANAGER:
          return 3000;
      }
    }

    return 0;
  },
}


// 員工列表
const employees = [
  {
    name: '小明',
    role: ROLE.PT,
  },
  {
    name: '小華',
    role: ROLE.FULL_TIME,
  },
  {
    name: '小美',
    role: ROLE.MANAGER,
  },
];

// 假設本月營收為 860000
const revenue = 860000;

// 取得小華本月薪資
const salary = PayrollManager.getBaseSalaryByRole(employees[1].role) +
               PayrollManager.getBaseBonusPerPerson(revenue) +
               PayrollManager.getIncentiveBonusByRole(revenue, employees[1].role);


// 根據營收以及個人職級計算每月應得薪資
const PayrollManagerV2 = {
  // 取得每個職級的基本薪資
  getSalary: function (staff, revenue) {
    // 取得每個職級的基本薪資
    const getBaseSalaryByRole = function (role) {
      switch (role) {
        case ROLE.PT:
          return 22000;
        case ROLE.FULL_TIME:
          return 40000;
        case ROLE.MANAGER:
          return 60000;
      }
    };

    // 根據營收取得每個人的基底獎金
    const getBaseBonusPerPerson = function (revenue) {
      if (revenue >= 1000000) {
        return 5000;
      } else if (revenue >= 750000) {
        return 3000;
      } else if (revenue >= 500000) {
        return 2000;
      } else if (revenue >= 300000) {
        return 1500;
      } else if (revenue >= 200000) {
        return 1000;
      }

      return 0;
    };


    // 根據職級取得激勵獎金
    const getIncentiveBonusByRole = function (revenue, role) {
      if (revenue >= 1000000) {
        switch (role) {
          case ROLE.PT:
            return 1000;
          case ROLE.FULL_TIME:
            return 2000;
          case ROLE.MANAGER:
            return 6000;
        }
      } else if (revenue >= 500000) {
        switch (role) {
          case ROLE.PT:
            return 200;
          case ROLE.FULL_TIME:
            return 1000;
          case ROLE.MANAGER:
            return 3000;
        }
      }
      return 0;
    };
    
    return getBaseSalaryByRole(staff.role) +
           getBaseBonusPerPerson(revenue) +
           getIncentiveBonusByRole(revenue, staff.role);
  }
};

// 取得小華本月薪資
const salaryV2 = PayrollManagerV2.getSalary(employees[1], revenue);
