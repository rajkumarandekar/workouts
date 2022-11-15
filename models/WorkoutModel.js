const mongoose = require("mongoose"); // becoz its creates theses models and schemas only moongose will create dat schemas mongodb is schema-less

const Schema = mongoose.Schema; //it will Schema function to create shema

const workoutSchema = new Schema( // new schema creatte 1st argument describes how the object looks ,
  {
    title: {
      // title properties setting how it willbe
      type: String,
      required: true,
    },
    reps: {
      // reps properties should set
      type: Number,
      required: true,
    },
    load: {
      /// load perpoerties should set
      type: Number,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } /// second arguments im going through to pass another object which is going to have a timestamps = true mean when we try to a create new
  // document it automaticalyy adds a created app property for us to sya when the document was created which is nice and also i thinl it adds an updated property as well whenr it
);
module.exports = mongoose.model("Workout", workoutSchema); // to model is based on schema schema defines the structure  of a particular document or type of document inside our database what a model does is toapply that schema to ap particular model
// and we use the model to interact with a collection of that name so let  1 is model name = workout beacuse it collection for workout automatically , second argumrnt is schema workout
