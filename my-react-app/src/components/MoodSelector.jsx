// src/components/MoodSelector.js
import React from 'react';
import Select from 'react-select';

//const moods = ['Aimless', 'Angry', 'Anxious', 'Ashamed', 'Attached', 'Attacked', 'Avoidant', 'Bitter', 'Blaming', 'Burdened', 'Burnt Out', 'Compassionate', 'Conflicted', 'Confused', 'Critical', 'Defeated', 'Defenseless', 'Defensive', 'Dependent', 'Depressed', 'Discouraged', 'Disconnected', 'Discontent', 'Disempowered', 'Dissatisfied', 'Distracted', 'Disturbed', 'Doubtful', 'Empty', 'Fearful', 'Frustrated', 'Guilty', 'Hateful', 'Helpless', 'Hesitant', 'Heavy', 'Hopeless', 'Hurt', 'Impatient', 'Injustice', 'Insecure', 'Irritated', 'Isolated', 'Judgmental', 'Judged', 'Lacking', 'Lacking Peace', 'Let down', 'Limited', 'Lonely', 'Lost', 'Low self-esteem', 'Miserable', 'Misunderstood', 'Negative', 'Negative Relationships', 'Needy', 'Nostalgic', 'Overthinking', 'Overwhelmed', 'Persecuted', 'Powerless', 'Purposeless', 'Reactive', 'Regretful', 'Repeating Mistakes', 'Resentful', 'Resistant', 'Restless', 'Sacrifice', 'Sad', 'Scarcity Mindset', 'Searching', 'Seeking Guidance', 'Seeking Validation', 'Self-critical', 'Separated', 'Serious', 'Sick', 'Stressed', 'Stuck', 'Stuck in Past', 'Suffering', 'Threatened', 'Tormented', 'Triggered', 'Uncertain', 'Unfairly Treated', 'Unfairness', 'Unfulfilled', 'Unhappy', 'Unforgiving', 'Unlovable', 'Unsafe', 'Unwell', 'Unworthy', 'Upset', 'Vengeful', 'Victimized', 'Vulnerable', 'Waiting', 'Weak', 'Worthless', 'Worried'];

// Define the moods as objects with value and label properties
const moods = [
  { value: 'Aimless', label: 'Aimless' },
  { value: 'Angry', label: 'Angry' },
  { value: 'Anxious', label: 'Anxious' },
  { value: 'Ashamed', label: 'Ashamed' },
  { value: 'Attached', label: 'Attached' },
  { value: 'Attacked', label: 'Attacked' },
  { value: 'Avoidant', label: 'Avoidant' },
  { value: 'Bitter', label: 'Bitter' },
  { value: 'Blaming', label: 'Blaming' },
  { value: 'Burdened', label: 'Burdened' },
  { value: 'Burnt Out', label: 'Burnt Out' },
  { value: 'Compassionate', label: 'Compassionate' },
  { value: 'Conflicted', label: 'Conflicted' },
  { value: 'Confused', label: 'Confused' },
  { value: 'Critical', label: 'Critical' },
  { value: 'Defeated', label: 'Defeated' },
  { value: 'Defenseless', label: 'Defenseless' },
  { value: 'Defensive', label: 'Defensive' },
  { value: 'Dependent', label: 'Dependent' },
  { value: 'Depressed', label: 'Depressed' },
  { value: 'Discouraged', label: 'Discouraged' },
  { value: 'Disconnected', label: 'Disconnected' },
  { value: 'Discontent', label: 'Discontent' },
  { value: 'Disempowered', label: 'Disempowered' },
  { value: 'Dissatisfied', label: 'Dissatisfied' },
  { value: 'Distracted', label: 'Distracted' },
  { value: 'Disturbed', label: 'Disturbed' },
  { value: 'Doubtful', label: 'Doubtful' },
  { value: 'Empty', label: 'Empty' },
  { value: 'Fearful', label: 'Fearful' },
  { value: 'Frustrated', label: 'Frustrated' },
  { value: 'Guilty', label: 'Guilty' },
  { value: 'Hateful', label: 'Hateful' },
  { value: 'Helpless', label: 'Helpless' },
  { value: 'Hesitant', label: 'Hesitant' },
  { value: 'Heavy', label: 'Heavy' },
  { value: 'Hopeless', label: 'Hopeless' },
  { value: 'Hurt', label: 'Hurt' },
  { value: 'Impatient', label: 'Impatient' },
  { value: 'Injustice', label: 'Injustice' },
  { value: 'Insecure', label: 'Insecure' },
  { value: 'Irritated', label: 'Irritated' },
  { value: 'Isolated', label: 'Isolated' },
  { value: 'Judgmental', label: 'Judgmental' },
  { value: 'Judged', label: 'Judged' },
  { value: 'Lacking', label: 'Lacking' },
  { value: 'Lacking Peace', label: 'Lacking Peace' },
  { value: 'Let down', label: 'Let down' },
  { value: 'Limited', label: 'Limited' },
  { value: 'Lonely', label: 'Lonely' },
  { value: 'Lost', label: 'Lost' },
  { value: 'Low self-esteem', label: 'Low self-esteem' },
  { value: 'Miserable', label: 'Miserable' },
  { value: 'Misunderstood', label: 'Misunderstood' },
  { value: 'Negative', label: 'Negative' },
  { value: 'Negative Relationships', label: 'Negative Relationships' },
  { value: 'Needy', label: 'Needy' },
  { value: 'Nostalgic', label: 'Nostalgic' },
  { value: 'Overthinking', label: 'Overthinking' },
  { value: 'Overwhelmed', label: 'Overwhelmed' },
  { value: 'Persecuted', label: 'Persecuted' },
  { value: 'Powerless', label: 'Powerless' },
  { value: 'Purposeless', label: 'Purposeless' },
  { value: 'Reactive', label: 'Reactive' },
  { value: 'Regretful', label: 'Regretful' },
  { value: 'Repeating Mistakes', label: 'Repeating Mistakes' },
  { value: 'Resentful', label: 'Resentful' },
  { value: 'Resistant', label: 'Resistant' },
  { value: 'Restless', label: 'Restless' },
  { value: 'Sacrifice', label: 'Sacrifice' },
  { value: 'Sad', label: 'Sad' },
  { value: 'Scarcity Mindset', label: 'Scarcity Mindset' },
  { value: 'Searching', label: 'Searching' },
  { value: 'Seeking Guidance', label: 'Seeking Guidance' },
  { value: 'Seeking Validation', label: 'Seeking Validation' },
  { value: 'Self-critical', label: 'Self-critical' },
  { value: 'Separated', label: 'Separated' },
  { value: 'Serious', label: 'Serious' },
  { value: 'Sick', label: 'Sick' },
  { value: 'Stressed', label: 'Stressed' },
  { value: 'Stuck', label: 'Stuck' },
  { value: 'Stuck in Past', label: 'Stuck in Past' },
  { value: 'Suffering', label: 'Suffering' },
  { value: 'Threatened', label: 'Threatened' },
  { value: 'Tormented', label: 'Tormented' },
  { value: 'Triggered', label: 'Triggered' },
  { value: 'Uncertain', label: 'Uncertain' },
  { value: 'Unfairly Treated', label: 'Unfairly Treated' },
  { value: 'Unfairness', label: 'Unfairness' },
  { value: 'Unfulfilled', label: 'Unfulfilled' },
  { value: 'Unhappy', label: 'Unhappy' },
  { value: 'Unforgiving', label: 'Unforgiving' },
  { value: 'Unlovable', label: 'Unlovable' },
  { value: 'Unsafe', label: 'Unsafe' },
  { value: 'Unwell', label: 'Unwell' },
  { value: 'Unworthy', label: 'Unworthy' },
  { value: 'Upset', label: 'Upset' },
  { value: 'Vengeful', label: 'Vengeful' },
  { value: 'Victimized', label: 'Victimized' },
  { value: 'Vulnerable', label: 'Vulnerable' },
  { value: 'Waiting', label: 'Waiting' },
  { value: 'Weak', label: 'Weak' },
  { value: 'Worthless', label: 'Worthless' },
  { value: 'Worried', label: 'Worried' }
];

const MoodSelector = ({ onSelectMood }) => {
  // Handle change event from react-select
  const handleChange = (selectedOption) => {
    // Pass the selected mood value to the parent component
    if (selectedOption) {
      onSelectMood(selectedOption.value);
    } else {
      onSelectMood(null);
    }
  };
  const customStyles = {
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999
    }),
    // If needed, tweak the menu’s absolute/fixed positioning:
    menu: (base) => ({
      ...base,
      marginTop: '4px'
    }),
    container: (provided) => ({
      ...provided,
      width: '100%',
      maxWidth: '300px',       // Control the width
      margin: '1rem auto',     // Center it horizontally
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: '#fff', // Control background
      border: '1px solid #ccc',
      borderRadius: '4px',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#fff',
      zIndex: 9999,            // Ensure it appears on top
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#007bff' : '#fff',
      color: state.isFocused ? '#fff' : '#000',
      cursor: 'pointer',
      padding: 0.5,//adjusts space in drop down box
    }), 
  };

  return (
    <div className="mood-selector">
      <h3>Select Your Mood</h3>
      <div> 
 <Select
  options={moods}
  
  onChange={handleChange}
  placeholder="Select a mood..."
  isClearable
  menuPortalTarget={document.body}
  menuPosition="fixed"
  styles={customStyles}
/>
      </div>
    </div>
  );
};

export default MoodSelector;
