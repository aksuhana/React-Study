import React from 'react';
import { IconButton, Tooltip, MenuItem , ListItemIcon} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GenericMaterialTable from './shared/GenericMaterialTable';

const UserTable = () => {const columnsConfig = [
    { accessorKey: 'valueCreationId', header: 'Value Creation ID', size: 100 },
    { accessorKey: 'projectId', header: 'Project ID', size: 100 },
    { accessorKey: 'projectName', header: 'Project Name', size: 200 },
    { accessorKey: 'submissionDate', header: 'Submission Date', size: 150 },
    { accessorKey: 'submissionContact', header: 'Submission Contact', size: 150 },
    { accessorKey: 'projectPhase', header: 'Project Phase', size: 150 },
    { accessorKey: 'activity', header: 'Activity', size: 200 },
    { accessorKey: 'description', header: 'Description', size: 300 },
    { accessorKey: 'valueCreationType', header: 'Value Creation Type', size: 150 },
    { accessorKey: 'costSavingsSubmission', header: 'Cost Savings Submission', size: 150, align: 'right' },
    { accessorKey: 'valueCreationOccurrence', header: 'Value Creation Occurrence', size: 150 },
    { accessorKey: 'monthsOfRecognizedSavings', header: 'Months of Recognized Savings', size: 150 },
    { accessorKey: 'totalSavings', header: 'Total Savings', size: 150, align: 'right' },
    { accessorKey: 'status', header: 'Status', size: 100 },

];


    const dataConfig = [
        {
            valueCreationId: 'VC001',
            projectId: 'P001',
            projectName: 'Project Alpha',
            submissionDate: '2024-01-10',
            submissionContact: 'John Doe',
            projectPhase: 'Phase 1',
            activity: 'Activity 1',
            description: 'Improved efficiency by automating tasks.',
            valueCreationType: 'Cost Savings',
            costSavingsSubmission: '$100,000',
            valueCreationOccurrence: 'Quarterly',
            monthsOfRecognizedSavings: '12',
            totalSavings: '$1,200,000',
            status: 'Approved',
        },
        {
            valueCreationId: 'VC002',
            projectId: 'P002',
            projectName: 'Project Beta',
            submissionDate: '2024-02-15',
            submissionContact: 'Jane Smith',
            projectPhase: 'Phase 2',
            activity: 'Activity 2',
            description: 'Reduced overhead by outsourcing.',
            valueCreationType: 'Cost Avoidance',
            costSavingsSubmission: '$150,000',
            valueCreationOccurrence: 'Annually',
            monthsOfRecognizedSavings: '24',
            totalSavings: '$3,600,000',
            status: 'In Review',
        },
        {
            valueCreationId: 'VC003',
            projectId: 'P003',
            projectName: 'Project Gamma',
            submissionDate: '2024-03-20',
            submissionContact: 'Sam Wilson',
            projectPhase: 'Phase 1',
            activity: 'Activity 3',
            description: 'Decreased energy consumption by 20%.',
            valueCreationType: 'Efficiency Improvement',
            costSavingsSubmission: '$80,000',
            valueCreationOccurrence: 'Monthly',
            monthsOfRecognizedSavings: '6',
            totalSavings: '$480,000',
            status: 'Pending',
        },
        {
            valueCreationId: 'VC004',
            projectId: 'P004',
            projectName: 'Project Delta',
            submissionDate: '2024-04-05',
            submissionContact: 'Diana Prince',
            projectPhase: 'Phase 3',
            activity: 'Activity 4',
            description: 'Optimized supply chain management.',
            valueCreationType: 'Cost Reduction',
            costSavingsSubmission: '$110,000',
            valueCreationOccurrence: 'Quarterly',
            monthsOfRecognizedSavings: '12',
            totalSavings: '$1,320,000',
            status: 'Approved',
        },
    ];

    const rowActions = [
        { id: 'edit', label: 'Editar' },  // Spanish for 'Edit'
        { id: 'delete', label: 'Eliminar' },  // Spanish for 'Delete'
        { id: 'view', label: 'Ver' },  // Spanish for 'View'
    ];

    const handleActionClick = (actionId, rowData) => {
        console.log(`Action: ${actionId}, Row ID: ${rowData.valueCreationId}`);
        console.log(rowData)
    };
    // Custom row actions passed to GenericMaterialTable

    return (
        <div>
            <h1>User Table with Custom Actions</h1>
            <GenericMaterialTable
                columnsConfig={columnsConfig}
                dataConfig={dataConfig}
                pinnedColumns={{ right: ['mrt-row-actions'] }}  // Pin "email" column to the right
                rowActions= {rowActions} // Pass row actions
                handleActionClick={handleActionClick}
            />
        </div>
    );
};

export default UserTable;
