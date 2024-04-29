Feature: Table Reservation

  Scenario: Customer makes a reservation
    Given the customer is on the reservation page
    When they input their details
    And they select a table for 4
    And they submit the reservation request
    Then they should receive a confirmation of the reservation
