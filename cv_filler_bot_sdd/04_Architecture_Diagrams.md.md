# Architecture Diagrams

## High-Level System Architecture:

```mermaid
graph TD
    User-->ChromeExtension
    ChromeExtension-->API_Gateway
    API_Gateway-->Backend
    Backend-->GoogleSheets
    Backend-->DynamoDB
    Backend-->S3
    Backend-->Playwright
    Backend-->SageMaker
    SageMaker-->TensorFlowModel
```
## Sequence Diagram: Form Filling Workflow

```mermaid
sequenceDiagram
	User->>ChromeExtension: Parse Job Page
    ChromeExtension->>Backend: Send Parsed Data
    Backend->>TensorFlowModel: Predict Responses
    TensorFlowModel->>Backend: Return Predictions
    Backend->>Playwright: Automate Form Filling
    Playwright->>Job Portal: Submit Form
    Job Portal->>Backend: Confirm Submission
    Backend->>GoogleSheets: Log Application
```

## Class Diagram: Core System Components:

```mermaid
classDiagram
    class User {
        +string name
        +string email
        +string resumePath
    }

    class JobTracker {
        +addJob(job: JobData)
        +updateJobStatus(jobId: string, status: string)
        +getJobDetails(jobId: string)
    }

    class MLModel {
        +predictFieldResponse(data: FieldData): string
        +trainModel(corrections: CorrectionData)
    }

    class PlaywrightService {
        +fillForm(url: string, data: FormData)
    }

    User --> JobTracker : "Adds or updates jobs"
    JobTracker --> MLModel : "Provides training data"
    MLModel --> PlaywrightService : "Predicts responses" 
```
## ER Diagram: Data Relationships

```mermaid

erDiagram

    User {

        string userId PK

        string name

        string email

        string resumePath

    }

  

    JobApplication {

        string jobId PK

        string userId FK

        string company

        string jobTitle

        string location

        string status

    }

  

    Recruiter {

        string recruiterId PK

        string jobId FK

        string name

        string contactInfo

    }

  

    User ||--o{ JobApplication : "applies for"

    JobApplication ||--o{ Recruiter : "associated with"
```
## Activity Diagram: Form Filling Workflow

```mermaid

graph TD

    A[User Submits Job URL] --> B[Chrome Extension Parses Page]

    B --> C[Data Sent to Backend]

    C --> D[ML Model Predicts Responses]

    D --> E[Playwright Fills Form]

    E --> F[Job Portal Submission]

    F --> G[Google Sheets Updated]
```
