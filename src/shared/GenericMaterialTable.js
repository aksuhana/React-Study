import React, { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { MenuItem } from '@mui/material';

// Generic Table Component
const GenericTable = ({
                          columnsConfig = [],           // Ensure default to an empty array if not provided
                          dataConfig = [],              // Ensure default to an empty array if not provided
                          pinnedColumns = {},
                          enableColumnPinning = true,    // Default: true, can be passed dynamically
                          enableRowActions = true,       // Default: true, can be passed dynamically
                          layoutMode = 'grid-no-grow',   // Default: 'grid-no-grow', can be passed dynamically
                          rowActions = [],               // Ensure rowActions is always an array
                          handleActionClick = () => {},  // Ensure this is always defined
                          initialStateConfig = {},       // Allow dynamic initial state configuration
                      }) => {
    // Memoize the columns
    const columns = useMemo(() => columnsConfig, [columnsConfig]);

    // Directly use MaterialReactTable without useMaterialReactTable hook
    return (
        <MaterialReactTable
            columns={columns}               // Pass in the columns configuration
            data={dataConfig}               // Pass in the data configuration
            enableColumnPinning={enableColumnPinning}  // Dynamically enable/disable column pinning
            enableRowActions={enableRowActions}        // Dynamically enable/disable row actions
            layoutMode={layoutMode}                   // Dynamic layout mode
            renderRowActionMenuItems={({ row }) =>
                rowActions.map((action) => (
                    <MenuItem
                        key={action.id}
                        onClick={() => handleActionClick(action.id, row.original)}
                    >
                        {action.label}
                    </MenuItem>
                ))
            }
            initialState={{
                columnPinning: {
                    left: pinnedColumns.left || [],   // Columns to pin on the left dynamically
                    right: pinnedColumns.right || [], // Columns to pin on the right dynamically
                },
                ...initialStateConfig,              // Spread any additional initial state configuration
            }}
        />
    );
};

export default GenericTable;
