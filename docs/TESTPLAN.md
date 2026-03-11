# Student Account System Test Plan

| Test Case ID | Test Case Description                | Pre-conditions                | Test Steps                                                                 | Expected Result                                 | Actual Result | Status (Pass/Fail) | Comments |
|--------------|--------------------------------------|-------------------------------|----------------------------------------------------------------------------|--------------------------------------------------|---------------|--------------------|----------|
| TC01         | View initial balance                 | App compiled and running      | 1. Start app<br>2. Select 'View Balance'                                   | Balance displayed as 1000.00                     |               |                    |          |
| TC02         | Credit account with valid amount     | App compiled and running      | 1. Start app<br>2. Select 'Credit Account'<br>3. Enter 100.00              | Balance increases by 100.00<br>New balance shown |               |                    |          |
| TC03         | Debit account with sufficient funds  | App compiled and running      | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter 200.00               | Balance decreases by 200.00<br>New balance shown |               |                    |          |
| TC04         | Debit account with insufficient funds| App compiled and running      | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter 2000.00              | Error message: "Insufficient funds"<br>Balance unchanged |               |                    |          |
| TC05         | Invalid menu choice                  | App compiled and running      | 1. Start app<br>2. Enter invalid menu option (e.g., 5)                     | Error message: "Invalid choice"<br>Prompt to retry |               |                    |          |
| TC06         | Exit application                     | App compiled and running      | 1. Start app<br>2. Select 'Exit'                                            | App exits gracefully with goodbye message         |               |                    |          |
| TC07         | Multiple credits and debits          | App compiled and running      | 1. Start app<br>2. Perform multiple credit and debit operations in sequence | Balance updates correctly after each operation    |               |                    |          |

> Use this test plan to validate business logic with stakeholders and as a basis for future Node.js unit/integration tests.
