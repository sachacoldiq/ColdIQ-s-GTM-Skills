# Job Change Tracking

## Overview

Monitor job changes of your contacts as buying signals.

## Two Methods in Clay

### 1. Monitor Existing Table
- Actions > Monitor for Job Changes
- Specify the LinkedIn URL column
- Save and run

### 2. Create New Tracking Table
- +Create New > Table > Track Job Changes
- Or copy a template

## Historical vs Future Tracking

### Historical
- Include "Company LinkedIn URL"
- Checks if the contact has changed companies

### Future
- Only "Person LinkedIn URL"
- Monitors future changes

## Behavior

- New row created for each detected change
- Complete history maintained
- Delay from a few minutes to several hours depending on volume

## Signal Value

- 3x higher response rate vs cold
- Peak engagement: days 14-45 after change
- They're actively building their stack
- Vendor amnesty period (new leadership willing to try new tools)

## Best Trigger Template

```
Hey congrats on the new role at {{company}}.

As you're taking over {{department}}, curious how you're
currently handling {{relevant_problem}}?

We helped {{similar_company}} with exactly that.
```
