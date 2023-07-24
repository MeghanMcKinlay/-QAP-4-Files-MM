// MotelCustomer object
const MotelCustomer = {
    name: "",
    birthDate: "",
    gender: "",
    roomPreferences: [],
    paymentMethod: "",
    mailingAddress: {
      street: "",
      city: "",
      state: "",
      zip: ""
    },
    phoneNumber: "",
    checkInDateTime: {
      date: "",
      time: ""
    },
    checkOutDateTime: {
      date: "",
      time: ""
    },
    calculateAge: function() {
      const today = new Date();
      const birthDate = new Date(this.birthDate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
    calculateDurationOfStay: function() {
      const checkInDateTime = new Date(this.checkInDateTime.date + " " + this.checkInDateTime.time);
      const checkOutDateTime = new Date(this.checkOutDateTime.date + " " + this.checkOutDateTime.time);
      const duration = checkOutDateTime.getTime() - checkInDateTime.getTime();
      const days = Math.floor(duration / (1000 * 60 * 60 * 24));
      const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      return { days, hours };
    },
    generateDescription: function() {
      const age = this.calculateAge();
      const durationOfStay = this.calculateDurationOfStay();
      return `Name: ${this.name}
  Age: ${age}
  Gender: ${this.gender}
  Room Preferences: ${this.roomPreferences.join(", ")}
  Payment Method: ${this.paymentMethod}
  Mailing Address: ${this.mailingAddress.street}, ${this.mailingAddress.city}, ${this.mailingAddress.state}, ${this.mailingAddress.zip}
  Phone Number: ${this.phoneNumber}
  Check-in Date and Time: ${this.checkInDateTime.date} ${this.checkInDateTime.time}
  Check-out Date and Time: ${this.checkOutDateTime.date} ${this.checkOutDateTime.time}
  Duration of Stay: ${durationOfStay.days} days and ${durationOfStay.hours} hours.`;
    }
  };
  
  // Example usage:
  const customer = Object.create(MotelCustomer);
  customer.name = "John Doe";
  customer.birthDate = "1990-05-15";
  customer.gender = "Male";
  customer.roomPreferences = ["Single Bed", "Non-Smoking"];
  customer.paymentMethod = "Credit Card";
  customer.mailingAddress.street = "123 Main Street";
  customer.mailingAddress.city = "Cityville";
  customer.mailingAddress.state = "State";
  customer.mailingAddress.zip = "12345";
  customer.phoneNumber = "555-1234";
  customer.checkInDateTime.date = "2023-07-10";
  customer.checkInDateTime.time = "15:00";
  customer.checkOutDateTime.date = "2023-07-15";
  customer.checkOutDateTime.time = "10:00";
  
  const description = customer.generateDescription();
  console.log(description);